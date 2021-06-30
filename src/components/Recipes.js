import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import { TextField, ThemeProvider,createMuiTheme} from '@material-ui/core';
import { Button } from '@material-ui/core';
import { green,yellow } from '@material-ui/core/colors';

const Recipes = () => {

    const[data,setData] = useState([]);
    const[query,setQuery] = useState("apple");
    var url ='https://api.edamam.com/search?q='
                +query+
                    '&app_id=46ee4851&app_key=9f50543a24674243d2eada30be063a10';
    console.log(url);

    const theme= createMuiTheme({
        palette:{
            primary :{
                main:green[500],
            },
            secondary :{
                main :yellow[500],
            }
        }
    })

    const getRecipes=()=>{
       
            axios.get(
                url
                ).then((res)=> {
                    setData(res.data.hits)
                    
                });
            
    };
    

    const onSubmit =(e)=>{
        e.preventDefault();
        getRecipes();

    };
   
    return (
        <div className='recipes'>
            <ThemeProvider theme={theme}>
            <form>
                <TextField        
                        label="Enter ingridient" 
                        variant="outlined" 
                        color="secondary"
                        style={{
                            fontSize: 15,
                            margin: 20,
                            color: 'black'
                        }}
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}/>
                <Button 
                        onClick={onSubmit} 
                        variant="contained" 
                        color="secondary"
                        style={{
                            margin:20,
                            boxShadow: '2px 2px 2px gray',
                            borderRadius: 10
                        }}>
                            Search
                </Button>
                
            </form>
            </ThemeProvider>
            <div className="recipes-list">
                {data
                .map((recipe) => (
                    <Recipe recipe={recipe}/>  
                ))}
            </div>
        </div>
    );
};

export default Recipes;