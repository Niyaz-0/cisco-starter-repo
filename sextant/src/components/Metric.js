import React, { useEffect} from 'react'

export default function Metric(props) {

    const [data, setData] = React.useState({});
    
      useEffect(() => {
       fetch(props.url)
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            console.log(data.ip, "data");
        })  
        .catch( err => console.error(err))
        
    } , [props.url])

  return (
    <h1 className="metrics">
        {data.ip ? data.ip : "Loading..."}
    </h1>
  )
}
