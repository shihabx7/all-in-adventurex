
const getYextLocationData=async()=>{
	const date = new Date();

	var day = date.getDate().toString()
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
		const liveapi= await fetch(`https://liveapi.yext.com/v2/accounts/me/entities?api_key=7bd809cf968d3f58da77e54e3e116925&v=`+cd+`&entityTypes=location&filter={"closed": {"$eq": false}}&limit=50`)
		//const revapi= await fetch(`https://api.yext.com/v2/accounts/3215199/reviews?api_key=7bd809cf968d3f58da77e54e3e116925&v=20210504&minPublisherDate=2020-04-02`)
		//const data = await getdata.json()
		const ldata= await liveapi.json()
       // res.status(200).json({getdata})

       return ldata
       
	} catch (err) {
		console.log(err)
	}
   
}

export default getYextLocationData