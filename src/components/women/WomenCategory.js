import React from 'react';
import { Link } from 'react-router-dom';
import AnnouncementTag from '../AnnouncementTag';

const WowomenCategory = () => {
  return (
    <div className='container-fluid'>
      <AnnouncementTag />
      <div className='container mt-5 clothing-category-header'>
        <span className='mr-auto'>
          <h4>Women</h4>
        </span>
        <div>
          <ul>
            <li>
              <Link to='/women/shirts'>Shirts</Link>
            </li>
            <li>
              <Link to='/women/jeans'>Jeans</Link>
            </li>
            <li>
              <Link to='/women/shoes'>Shoes</Link>
            </li>
            {/* <li>
              <Link to="/women/newreleases">New Releases</Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className='container-fluid mt-5 category-grid-container'>
        <div className='cat-img women-item-1'>
          <h1 className='category-title'>Herstyle Keetton Women's Open Toes</h1>
          <Link
            to='/women/shoes/womenShoesHerstyleKeettonOpenToe'
            className='category-img-btn'
          >
            Shop Now
          </Link>
        </div>
        <div className='mt-3 cat-img women-item-2'>
          <h1 className='category-title'>
            GLORIA VANDERBILT Women's Amanda Classic Tapered Jean
          </h1>
          <Link
            to='/women/jeans/womenJeansGLORIAVANDERBILTAmandaClassicTaperedJeans'
            className='category-img-btn'
          >
            Shop Now
          </Link>
        </div>
        <div className='mt-3 cat-img women-item-3'>
          <h1 className='category-title'>
            Volcom New School Womens Dress Sandal
          </h1>
          <Link
            to='/women/shoes/womenShoesVolcomNewSchoolDressSandal'
            className='category-img-btn'
          >
            Shop Now
          </Link>
        </div>
        <div className='mt-3 cat-img women-item-4'>
          <h1 className='category-title'>
            Yidarton Women's Comfy Cold Shoulder Twist Knot
          </h1>
          <Link
            to='/women/shirts/womenShirtYidartonWomenTop'
            className='category-img-btn'
          >
            Shop Now
          </Link>
        </div>
        <div className='mt-3 cat-img women-item-5'>
          <h1 className='category-title'>Hanes Women's Scoop-Neck Tank Top</h1>
          <Link
            to='/women/shirts/womenShirtHanesScoopNeckTankTop'
            className='category-img-btn'
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WowomenCategory;
