
const getYextReviewData=async()=>{
	const date = new Date();

	var day = date.getDate()
	var month = date.getMonth() + 1
	var year = date.getFullYear().toString()
	if(month<10){
		month=month.toString()
		month='0'+month
	}
	if(day<10){
		day=day.toString()
		day='0'+day
	}
	var cd=year+month+day

console.log(cd)
    try {
		//const getdata = await fetch(`https://api.yext.com/v2/accounts/me/entities?api_key=7bd809cf968d3f58da77e54e3e116925&v=20221126&entityTypes=location&limit=5`);
		//const liveapi= await fetch(`https://liveapi.yext.com/v2/accounts/me/entities?api_key=7bd809cf968d3f58da77e54e3e116925&v=`+cd+`&entityTypes=location&filter={"closed": {"$eq": false}}&limit=50`)
		const revapi= await fetch(`https://api.yext.com/v2/accounts/me/reviews?api_key=7bd809cf968d3f58da77e54e3e116925&v=`+cd+`&maxRating=5.0`)
        //const LocTotaRev= await fetch(`https://api.yext.com/v2/accounts/me/reviews?api_key=7bd809cf968d3f58da77e54e3e116925&v=`+cd+`&locationIds=113`)
       // const LocTotaFivstarRev= await fetch(`https://api.yext.com/v2/accounts/me/reviews?api_key=7bd809cf968d3f58da77e54e3e116925&v=`+cd+`&maxRating=5.0&locationIds=113`)
		//const data = await getdata.json()
		const revData= await revapi.json()
       // res.status(200).json({getdata})

       return revData
       
	} catch (err) {
		console.log(err)
	}
   
}

export default getYextReviewData