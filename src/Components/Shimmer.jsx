const Shimmer = ()=>{
    return <div className="shimmer">
      {Array(10).fill("").map((e,i)=>{
        return <div className="cardsShimmer" key={i} ></div>
      })}
    </div>

}
export default Shimmer;
// <div className="cardsShimmer"