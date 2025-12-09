export function filterLocationList(originalStateList, targetActivitySlug) {
  const isActiveStatus = true;
  const filteredStates = originalStateList
    .map(state => {
      // 1. Filter the locations within the current state
      const filteredLocations = state.locations
        .map(location => {
          // Find the matching activity within this location
          const matchingActivity = location.locationActivities.find(activity => {
            return (
              activity.activitySlug === targetActivitySlug &&
              activity.isActive === isActiveStatus
            );
          });

          if (matchingActivity) {
            // 2. Modify the bookingInfo object within the location
            // Use spread syntax to create a new object and avoid mutation
            return {
              ...location,
              bookingInfo: {
                ...location.bookingInfo,
                // Add the new property exactly as requested
                itemNo: matchingActivity.bookingItemNo,
              },
            };
          } else {
            // If no match found, this location is excluded from the new state's locations array
            return null;
          }
        })
        .filter(Boolean); // 3. Remove all 'null' entries (locations without the target activity)

      // 4. If this state still has locations after filtering, map it to a new state object
      if (filteredLocations.length > 0) {
        return {
          ...state,
          locations: filteredLocations,
        };
      } else {
        // If a state has no matching locations left, mark it for removal
        return null;
      }
    })
    .filter(Boolean); // 5. Remove all 'null' states from the final output array

  return filteredStates;
}