

const locationPage=()=>{

    
 
       
        
         
          
        


    
    return ( 
        <p>
        
        </p> 
    )

}
export default locationPage

export async function getStaticProps() {
    const content = null;
  
    if (!content) {
      return {
        redirect: {
          permanent: false,
          destination: '/locations/buffalo-ny',
        },
      };
    }
  
    return {
      props: {},
    };
  }