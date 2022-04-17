
import ProfileCard from '../Cards';
import MatchCard from '../Cards/MatchCard';

const divStyle = {
    color: 'blue',
   paddingTop: 20,
   paddingLeft: 50,
  };

  const title = {
    
   paddingTop: 30,
   paddingLeft: 50,

  };

  const Matches = {
    
    paddingLeft: 650,
    paddingRight: 200,
    paddingBottom: 30,
   };
   const sidebyside = {
    display: "flex", 
    flexWrap: "wrap"
   }

  


function Match(){
    return(
        <>
      
        
        <div>
            <h1 style = {title}>
                Tap to meet new people
            </h1>
        </div>
        <span>
           <div style = {divStyle}>
                    <ProfileCard />
                </div>  
                 <div style = {Matches}>
                    <MatchCard />
                </div> 
        </span>
      
                
    
       
        </>
    )
}
export default Match
