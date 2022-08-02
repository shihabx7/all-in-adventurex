import TitleSeparator from "../util/TitleSeparator"

const GameGallery=(props)=>{


    return (

        <div className="game-gallery " style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }}> 
            <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-28 px-4"> 
                <div className="s-title"> 
                    <TitleSeparator title="OUR ALL GAME IMAGES" color="golden-text" weight="font-bold"/>
                    <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-16">
                                 <p className="text-gray-700 md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                    </div>
                </div>
                <div className="game-gallery"> 
                    <div className="grid md:grid-cols-3 gap-8">
                        {
                            props.galleryitem.map((item)=>{

                                return(
                                    <div key={item.id} className="game-gl-item"> 
                                    <img src={
                                        item.img
                                    }></img>
                                </div>
                                )
                            })
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default GameGallery