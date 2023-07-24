import AppBar from './Homepage';
// function MyLearning(){
//     return(
//         <div>
//             <AppBar/>
//             <h1>
//                 My Learning
//             </h1>

//         </div>
//     )
// }
// export default MyLearning
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './mylearn.css'
import {useNavigate} from 'react-router-dom'

export default function MyLearning() {
    const nav = useNavigate();
    return (
        <div>
            <AppBar />
            <div className='body'>
                <div className='card-1'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            className='javimg-size'
                            image="https://res.cloudinary.com/dcx0cxkbj/image/upload/v1689309353/bsvfrefw6ybpsnu96aak.jpg"

                            title="green iguana"

                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Java
                            </Typography>
                            <Typography variant="body2" color="text.secondary">

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small" onClick={() => nav('/Livesession')}>Start</Button>
                        </CardActions>
                    </Card>
                </div>
                {/* card2 */}
                <div className='card2'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            className='javimg-size'
                            image="https://res.cloudinary.com/dcx0cxkbj/image/upload/v1689313613/zrxlkyljz6fpdvo3fueu.jpg"

                            title="green iguana"

                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                React
                            </Typography>
                            <Typography variant="body2" color="text.secondary">

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Start</Button>
                        </CardActions>
                    </Card>
                </div>
                {/* card3 */}
                <div className='card3'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            className='javimg-size'
                            image="https://res.cloudinary.com/dcx0cxkbj/image/upload/v1689315830/aws_aa7eb4.jpg"

                            title="green iguana"

                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                AWS(Amazon Web Service)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Start</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    );
}
