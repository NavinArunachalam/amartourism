import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoOpenOutline } from 'react-icons/io5';

const cardData = [
  { id: 'andaman', image: 'thailand2.jpg', title: 'Andaman Islands Packages' },
  { id: 'australia', image: 'malaysia.jpg', title: 'Majestic Australia Road Trip' },
  { id: 'azerbaijan', image: 'singapore.jpg', title: 'Explore Azerbaijan Packages' },
  { id: 'bali', image: 'bali.png', title: 'Two type of Bali-Bliss Packages available' },
  { id: 'bhutan', image: 'dubai.jpg', title: 'Bhutan - Land of the Thunder Dragon' },
  { id: 'delhi', image: 'dubai.jpg', title: 'Delhi Golden Triangle' },
  { id: 'dubai', image: 'dubai.jpg', title: 'Dazzling Dubai Discovery' },
  { id: 'europe', image: 'vietnam.jpg', title: 'Glimpses of Europe' },
  { id: 'jammukashmir', image: 'vietnam.jpg', title: 'Jammu and Kashmir Packages' },
  { id: 'japan', image: 'vietnam.jpg', title: 'Japan Cherry Blossom Tour' },
  { id: 'kazakhstan', image: 'vietnam.jpg', title: 'Kazakhstan Adventure Packages' },
  { id: 'lakshadweep', image: 'vietnam.jpg', title: 'Lakshadweep Paradise Explorer' },
  { id: 'malaysia', image: 'vietnam.jpg', title: 'Discover the Wonders of Malaysia' },
  { id: 'maldives', image: 'vietnam.jpg', title: 'Maldives Paradise' },
  { id: 'manali', image: 'vietnam.jpg', title: 'Amazing Kullu-Manali' },
  { id: 'munnar', image: 'vietnam.jpg', title: 'Munnar - Paradise' },
  { id: 'newzealand', image: 'vietnam.jpg', title: 'New Zealand Packages' },
  { id: 'ooty', image: 'vietnam.jpg', title: 'Ooty - Queen of Hill Stations' },
  { id: 'scandinavia', image: 'vietnam.jpg', title: 'Scandinavia with Northern Lights' },
  { id: 'singapore', image: 'vietnam.jpg', title: 'Singapore Three Packages' },
  { id: 'srilanka', image: 'vietnam.jpg', title: 'Sri Lanka Packages' },
  { id: 'thailand', image: 'vietnam.jpg', title: 'Thailand Packages' },
  { id: 'wayanad', image: 'vietnam.jpg', title: 'Ooty - Queen of Hill Stations' },
];

const AllPlaces = () => {
  const [openModal, setOpenModal] = useState(null);
  const navigate = useNavigate();

  // const handleOpenModal = (modalId) => {
  //   setOpenModal(modalId);
  //   document.body.classList.add('prevent-background-scroll');
  // };

  const handleCloseModal = () => {
    setOpenModal(null);
    document.body.classList.remove('prevent-background-scroll');
  };

  const handleNavigate = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Amar Tourism All Packages
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of travel packages designed for unforgettable adventures across the globe.
        </p>
      </div>
      <section id="content" className="card-section">
        {cardData.map((card) => (
          <div key={card.id} className="card">
            <img className="card-img" src={card.image} alt={`${card.title} image`} />
            <div className="title">
              <h2>{card.title}</h2>
            </div>
            <div className="more">
              <button
                className="modal-open"
                onClick={() => handleNavigate(card.id)}
              >
                more
                <IoOpenOutline className="open-icon" />
              </button>
            </div>
            {openModal === card.id && (
              <div className="modal" onClick={handleCloseModal}>
                <div className="modal-content">
                  <button className="modal-close">Close</button>
                  <h2>{card.title}</h2>
                  <p>Details about {card.title} go here.</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export const DetailPage = () => {
  const { id } = useParams();
  const card = cardData.find((item) => item.id === id);

  if (!card) {
    return <div className="container mx-auto px-4 py-20">Package not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">{card.title}</h1>
      <img className="w-full max-w-md mx-auto rounded-lg mb-4" src={card.image} alt={`${card.title} image`} />
      <p className="text-lg text-gray-600">Details about {card.title} go here.</p>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => window.history.back()}
      >
        Back to Packages
      </button>
    </div>
  );
};
  export default  AllPlaces