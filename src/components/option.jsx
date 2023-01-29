import {React,useState} from 'react'
import {Box,Button,Grid,Typography} from "@mui/material"

const Option = (props) => {
    const [ tsk,setTsk] = useState('')
    props.setTsk(tsk)
    const {data} = props
    // console.log(data)        
  return (
    <div>
        <Box >
        <Grid container>
        {data && Array.isArray(data) && data.length > 0 ? data.map( (x,i)=>{
            return(
         <Grid item md={6} sm={6} xs={12} key={i}>
             <Button variant='contained' onClick={() => setTsk(x)}  >{x}</Button>
            </Grid>
                
            )
        } ) :null }
        

        </Grid>
        </Box>
    </div>
  )
}

export default Option;
