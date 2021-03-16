import React, {useState, useEffect} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

import './Products.scss';

const Products = ({query}) =>{

	
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [pics, setPics] = useState([])
      
     

    const getItems = async (page) => {
        const response = await (await fetch(`https://randomuser.me/api/?page=${page}&results=8`)).json()
        return response.results;      
        
    }
    
    useEffect(() => {

        const items = async () => {
            const newPics = await getItems(page)
            setPics(prev => [...prev, ...newPics])
            setLoading(false)            
        };
  
        items()
        

    }, []);

    const getItemss = async (page) => {
         const response = await (await fetch(`https://randomuser.me/api/?page=${page}&results=4`)).json()
         return response.results; 
            
    }

    const itemss = async () => {
            const newPics = await getItemss(page)
            setPics(prev => [...prev, ...newPics])
            setLoading(false)            
        };
    useEffect(() => {

        
  
        itemss()
        

    }, [page]);

     const handleSearch = pics.filter(pic =>{
        return pic.name.first.toLowerCase().includes(query.toLowerCase())
    })

        
    return <>

        <div  >
            <InfiniteScroll  className= 'thumbnails'
                dataLength={itemss}               
                next={()=>setPage(page + 1)}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {pics && handleSearch.map(pic =>{
                    return <div key={pic.cell} className = 'img-container'>              
                        <img  className= 'robo' src="https://robohash.org/1" alt={pic.name.first}/>
                        <h3>{pic.name.first}</h3>
                         
                    </div>
              
                })}
                
            </InfiniteScroll>
        
        
            { loading && <h1>Loading...</h1>}
        </div >     
     
    </>

    
   

}
export default Products