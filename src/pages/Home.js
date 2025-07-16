import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import img1 from '../images/banner.jpg'
import img2 from '../images/banner2.jpg'
import img3 from '../images/naruto.jpeg'
import img4 from '../images/zoro.jpeg'
import img5 from '../images/luffy.jpeg'
import img6 from '../images/sanji.jpeg'
import img7 from '../images/wrist band.jpeg'
import img8 from '../images/ring.jpeg'
import img9 from '../images/ear ring.jpeg'
import img10 from '../images/stawhats.jpeg'
import img11 from '../images/usopp.jpeg'
import img12 from '../images/franky.jpeg'
import img13 from '../images/namirobin.jpeg'
import img14 from '../images/goku.jpeg'
import img15 from '../images/ace cup.jpeg'
import img16 from '../images/berserkmp.jpg'
import img17 from '../images/oppocketwatch.jpg'
import img18 from '../images/opbc.jpg'
import img19 from '../images/dnbc.jpeg'
import { useSelector,useDispatch } from 'react-redux';
import { addTocart,deleteFromCart } from '../redux/cartslice.js';

const Home = () => {
    const tsh =[
        {   id:1,img:img3,title:'Naruto tshirt',subtitle:'Official Naruto tee with detailed design.',price:20,quantity:1},
        {   id:2,img:img4,title:'Zoro tshirt',subtitle:'Official Zoro tee with detailed design.',price:20,quantity:1},
        {   id:3,img:img5,title:'Luffy Hoodie',subtitle:'Official Luffy hoodie with detailed design.',price:50,quantity:1},
        {   id:4,img:img6,title:'Sanji Hoodie',subtitle:'Official Sanji tee with detailed design.',price:50,quantity:1},
        {   id:5,img:img11,title:'Usopp tshirt',subtitle:'Official Usopp tee with detailed design.',price:24,quantity:1},
        {   id:6,img:img12,title:'Frankie shirt',subtitle:'Official Frankie before timeskip shirt with detailed design.',price:30,quantity:1},
        {   id:7,img:img13,title:'Nami & Robin Hoodie',subtitle:'Official Nami & Robin Hoodie with detailed design.',price:50,quantity:1},
        {   id:8,img:img14,title:'Goku Hoodie',subtitle:'Official Goku Hoodie with detailed design from Dragonbll anime.',price:50,quantity:1},

    ]
    const acc=[
        {   id:9,img:img7,title:'One Piece Wrist Band',subtitle:'Official one piece wrist band with carved strawhats logo.',price:10,quantity:1},
        {   id:10,img:img8,title:'One Piece Ring',subtitle:'Official one piece black ring with carved strawhats logo.',price:15,quantity:1},
        {   id:11,img:img9,title:'Zoro Ear Ring',subtitle:'Official Zoro ear ring from one piece anime.',price:18,quantity:1},
        {   id:12,img:img10,title:'Strawhats Figures',subtitle:'Official one piece strawhats figures.',price:100,quantity:1},
        {   id:13,img:img15,title:'Porgtes D Ace Tea cup ',subtitle:"Official Tea cup with detailed design of ace's hat.",price:75,quantity:1},
        {   id:14,img:img16,title:'Berserk desk mouse pad',subtitle:'Official Berserk desk mouse pad with detailed design.',price:69,quantity:1},
        {   id:15,img:img17,title:'OnePiece Pocket Watch',subtitle:'Official OnePiece Pocket Watch with detailed design.',price:80,quantity:1},
        {   id:16,img:img18,title:'One Piece Phone Backcase',subtitle:'Official One Piece Phone Backcase with detailed design.',price:20,quantity:1},
        {   id:17,img:img19,title:'DeathNote Phone Backcase',subtitle:'Official DeathNote Phone Backcase with detailed design.',price:20,quantity:1},

    ]

    const cartitems=useSelector((state)=>state.cart.cartitems);

  // const products = useSelector((state) => state.product.items);

    const dispatch=useDispatch();

    const addCart=(item)=>{
    dispatch(addTocart(item))
}
    const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
}
{
    cartitems.find(reduxdata=>reduxdata.id===tsh.id)?
    (<button class="btn btn-danger cartbutton" onClick={()=>deleteCart(tsh)} > Remove From Cart </button>)
                            :
    (<button class="btn btn-danger cartbutton"  onClick={()=>addCart(tsh)} > Add To Cart </button>)}

{
    cartitems.find(reduxdata=>reduxdata.id===acc.id)?
    (<button class="btn btn-danger cartbutton" onClick={()=>deleteCart(acc)} > Remove From Cart </button>)
                            :
    (<button class="btn btn-danger cartbutton"  onClick={()=>addCart(acc)} > Add To Cart </button>)}


    return (
    <div>

    <header>
        <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={img1} class="d-block w-100" alt="Banner 1"/>
                </div>
                <div class="carousel-item">
                    <img src={img2} class="d-block w-100" alt="Banner 2"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </header>

    <section class="py-5">
        <div class="container">
            <h4 id="tshirt">Tshits/Hoodies</h4><br/>
            <div className="scrolling-wrapper d-flex flex-nowrap overflow-auto py-3">
                {
                tsh.map((a1) => (
                <div key={a1.id} className="me-3" style={{ minWidth: '200px' }}>
                    <div className="card h-100 shadow">
                        <img src={a1.img} className="card-img-top" alt={a1.title} />
                        <div className="card-body bg-dark text-white d-flex flex-column justify-content-between align-items-center">
                            <h5 className="card-title">{a1.title}</h5>
                            <p className="card-text">{a1.subtitle}</p>
                            <p>${a1.price}</p>
                            <Link to='/cart' className="btn btn-danger" >
                            <button onClick={()=>addCart(a1)} > Add To Cart </button>
                            </Link>
                        </div>
                    </div>
                </div>
                ))
            }
        </div><br/>

        <h4 id="acc">Accessories</h4><br/>/s
        <div className="scrolling-wrapper d-flex flex-nowrap overflow-auto py-3">
        {
            acc.map((b1) => (
            <div key={b1.id} className="me-3" style={{ minWidth: '200px' }}>
                    <div className="card h-100 shadow">
                        <img src={b1.img} className="card-img-top" alt={b1.title} />
                        <div className="card-body bg-dark text-white d-flex flex-column justify-content-between align-items-center">
                            <h5 className="card-title">{b1.title}</h5>
                            <p className="card-text">{b1.subtitle}</p>
                            <p>${b1.price}</p>
                            <Link to='/cart' className="btn btn-danger">
                            <button onClick={()=>addCart(b1)} > Add To Cart </button>
                            </Link>
                        </div>
                    </div>
                </div>))
        } 
        </div>

        </div>
    </section>
    </div>
)
}

export default Home
