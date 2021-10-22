// import {useEffect, useState} from "react";
// import axios from "axios";

// const githubRepo = () => {
//   const url = 'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc';
//   const [repos, setrepos] = useState([]);

//   useEffect(() => {
//     axios.get(url).then(res => {
//         setrepos(res.data.repository);
//     })
//   }, [])

//   return <div className="">
    
//   </div>
// };

// export default githubRepo;