import { Box, Center, Wrap, WrapItem } from "@chakra-ui/react"
import ProductCard from "../components/ProductCard";
import axios from "axios"
import { useEffect, useState } from "react";


const ProductsScreen = () => {

    const [data, setData]=useState([])

    useEffect(()=> {
        axios.get("api/products").then((response)=> {
            setData(response.data.products)
        }).catch(error=> {
            console.error(`error fetching:`, error)
        })
    },[])




    return (
        <> {data.length > 1 && (
            <Box>
                <Wrap spacing="30px" justify="center" minHeight="80vh" mx={{base: "12", md: "20", lg: "32"}} >
                
                {data.map((item, index) =>(
                    <WrapItem key={item.id}>
                        <Center w={"250px"} h={"450px"}>
                            <ProductCard product={item} loading={false} />
                        </Center>
                    </WrapItem>


                ))}
                </Wrap>
            </Box>

        )}
            
        </>
    )
};

export default ProductsScreen
