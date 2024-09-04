import { apiSetting, apiUrl } from "../../lib/apiSettings";
import { jobPositionSlugQuery } from "../../lib/query/singlePageQury";
import { formateJobSlug } from "../../lib/singlePageDataFormation";
export const getJobSlug = async () => {
  const jobSlugRes = await fetch(jobPositionSlugQuery, apiSetting);
  const jobSlugResObj = await jobSlugRes.json();
  const jobSlugDataArr = jobSlugResObj.data;

  const jobSlugList = formateJobSlug(jobSlugDataArr);
  //console.log(newList);

  return jobSlugList;
};

/*
  const jobSlugOLD = [
    {
      id: 1,
      jobSlug: "associate",
      jobName: "Associate",
    },
    {
      id: 2,
      jobSlug: "store-lead",
      jobName: "STORE LEAD",
    },
    {
      id: 3,
      jobSlug: "assistant-manager",
      jobName: "ASSISTANT MANAGER",
    },
    {
      id: 4,
      jobSlug: "store-manager",
      jobName: "STORE MANAGER",
    },
  ];
*/
