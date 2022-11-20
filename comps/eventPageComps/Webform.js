import Script from "next/script"
const WebForm=()=>{

    return(
        <div className="py-28 max-w-7xl mx-auto meet-team relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}> 
        <div className="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/2Z8oYdTLMSxVLHnPNqdaCK2ahvhHMkNFoFfebqWt5VSs9ZbiVTSqmH2oMGze3j57l">
            <Script src="https://webforms.pipedrive.com/f/loader"></Script>
            </div>
        </div>
    )
}

export default WebForm