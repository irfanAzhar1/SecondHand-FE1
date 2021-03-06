import React,{ useState,useEffect} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import NavbarFull from '../../components/Navbar/NavbarFull';
import CarouselItem from '../../components/Carousel/CarouselItem';
import CardName from '../../components/Card/CardName';
import { Link } from 'react-router-dom';

const PreviewProduk = () => {
    const [produk, setProduk] = useState({});

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('produk'));
        if (items) {
            setProduk(items);
        }
        console.log(items)
    },[]);

  return (
     <div className="mb-5">
        <NavbarFull/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-10 mx-auto">
                    <div className="row">
                        <div className="col-12 col-sm-8 mb-3">
                            <CarouselItem/>

                            <div className="card mt-4 round">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{produk.name}</h5>
                                    <p className="card-text">{produk.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 d-flex flex-sm-column flex-column-reverse">

                            <div className="card shadow round">
                                <div className="card-body">
                                    <h5 className="card-title mb-3">{produk.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{produk.status}</h6>
                                    <p className="card-text">Rp {produk.price}</p>

                                    <div className="d-grid gap-2">
                                        
                                        <Link to={`/seller/produk/add`} className="btn btn-outline-primary round" type="button">Kembali</Link>
                                    </div>
                                </div>
                            </div>

                            <CardName />

                        </div>
                    </div>

                </div>
                

            </div>
        </div>

    </div>
  )
}

export default PreviewProduk