import axios from "axios";

const URI='http://localhost:8080'

const getuser = () => axios.get(`${URI}/product/get`)
const adduser = (product) => axios.post(`${URI}/set`,product)
const getuserbyId = (id)=> axios.get(`${URI}/product/find/${id}`)
const edituser = (id,product)=>axios.put(`${URI}/product/edit/${id}`,product)
const deleteuser=(id)=>axios.delete(`${URI}/product/delete/${id}`)

const getFeedback = () => axios.get(`${URI}/Feedback/getfed`)
const addFeedback = (Feedback) => axios.post(`${URI}/Feedback/addfed`,Feedback)
// const getProductbyId = (id)=> axios.get(`${URI}/product/find/${id}`)
const editFeedback = (feed_id,FeedBack)=>axios.put(`${URI}/Feedback/updatefeed/${feed_id}`,FeedBack)
const deleteFeedback=(feed_id)=>axios.delete(`${URI}/Feedback/delete/${feed_id}`)

export {getuser,getuserbyId,adduser,edituser,deleteuser,getFeedback,addFeedback,editFeedback,deleteFeedback}