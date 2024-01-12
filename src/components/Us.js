import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Us.css';


const UsPage = () => {
    const { t } = useTranslation();
  const initialVisibleUsImages = 6;
  const initialVisibleImages50 = 6;
  const initialVisibleGebrealImages = 6;
  const initialVisibleTemecktImages = 6;
  const initialVisibleAdaneHotelImages = 6;
  const initialVisibleLuvImages = 6;

  const [visibleUsImages, setVisibleUsImages] = useState(initialVisibleUsImages);
  const [visibleImages50, setVisibleImages50] = useState(initialVisibleImages50);
  const [visibleGebrealImages, setVisibleGebrealImages] = useState(initialVisibleGebrealImages);
  const [visibleTemecktImages, setVisibleTemecktImages] = useState(initialVisibleTemecktImages);
  const [visibleAdaneHotelImages, setVisibleAdaneHotelImages] = useState(initialVisibleAdaneHotelImages);
  const [visibleLuvImages, setVisibleLuvImages] = useState(initialVisibleLuvImages);
  const [images, setImages] = useState([
    {
      path: '/images/50/YAD.jpg',
      description: '▶︎ •၊၊||၊|။||||။‌‌‌‌‌၊|• 0:10',
    },
    {
      path: '/images/50/YAD_5684.jpg',
      description: 'You are my heart, my life, my one and only thought ♡',
    },
    {
      path: '/images/50/YAD_5685.jpg',
      description: 'I belong to my beloved, and my beloved is mine.',
    },
    {
      path: '/images/50/YAD_5686.jpg',
      description: '𓆩♡𓆪',
    },
    {
      path: '/images/50/YAD_5687.jpg',
      description: 'There is no remedy for love but to love more.',
    },
    {
      path: '/images/50/YAD_5688.jpg',
      description: '𓆩❤️𓆪',
    },
    {
        path: '/images/50/YAD_5689.jpg',
        description: 'Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.',
      },
      {
        path: '/images/50/YAD_5691.jpg',
        description: '😊',
      },
      {
        path: '/images/50/YAD_5693.jpg',
        description: 'Loved you yesterday, love you still, always have, always will.',
      },
      
      {
        path: '/images/50/YAD_5695.jpg',
        description: '🤩',
      },
      {
        path: '/images/50/YAD_5697.jpg',
        description: 'All’s fair in love and basketball.',
      },
      {
        path: '/images/50/YAD_5698.jpg',
        description: 'ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ',
      },
      {
        path: '/images/50/YAD_5701.jpg',
        description: 'We loved with a love that was more than love.',
      },
      {
        path: '/images/50/YAD_5703.jpg',
        description: ' ˚₊‧꒰ა❤︎໒꒱ ‧₊',
      },
      {
        path: '/images/50/YAD_5704.jpg',
        description: 'Love isn’t something you find. Love is something that finds you.',
      },
      {
        path: '/images/50/YAD_5706.jpg',
        description: '˚₊‧❤︎⊹₊',
      },
      {
        path: '/images/50/YAD_5708.jpg',
        description: 'One is loved because one is loved. No reason is needed for loving.',
      },
      {
        path: '/images/50/YAD_5709.jpg',
        description: '★🎸🎧⋆｡ °⋆',
      },
      {
        path: '/images/50/YAD_5711.jpg',
        description: 'Love is shown more in deeds than in words.',
      },
      {
        path: '/images/50/YAD_5712.jpg',
        description: '♫⋆｡♪ ₊˚♬ﾟ.',
      },
      {
        path: '/images/50/YAD_5714.jpg',
        description: 'Love is like the wind, you canot see it but you can feel it.',
      },
      {
        path: '/images/50/YAD_5715.jpg',
        description: '♫₊˚.🎧 ✩｡',
      },
      {
        path: '/images/50/YAD_5718.jpg',
        description: 'In love there are two things: bodies and words.',
      },
      {
        path: '/images/50/YAD_5721.jpg',
        description: '♪ ',
      },
      {
        path: '/images/50/YAD_5727.jpg',
        description: 'To love is to recognize yourself in another.',
      },
      {
        path: '/images/50/YAD_5731.jpg',
        description: '⩇⩇:⩇⩇',
      },
      {
        path: '/images/50/YAD_5732.jpg',
        description: 'Passion makes the world go round. Love just makes it a safer place.',
      },
      {
        path: '/images/50/YAD_5922.jpg',
        description: 'ᴺᴼᵂ ᴾᴸᴬᵞᴵᴺᴳ♫♬♪',
      },
      {
        path: '/images/50/YAD_5923.jpg',
        description: 'Every time you look into my eyes, I fear that you may get a glimpse of how much I love you',
      },
      {
        path: '/images/50/YAD_5924.jpg',
        description: '🎵',
      },
      {
        path: '/images/50/YAD_5925.jpg',
        description: 'Each time you call my name, I try my best not to dance with rapture and sing with joy',
      },
      {
        path: '/images/50/YAD_5926.jpg',
        description: '↻      ◁     ||     ▷       ↺',
      },
      {
        path: '/images/50/YAD_5928.jpg',
        description: 'I knew it from the start – you will be and only will be a faraway dream',
      },
      {
        path: '/images/50/YAD_5930.jpg',
        description: 'Momento vivere',
      },
      {
        path: '/images/50/YAD_5932.jpg',
        description: 'I love you with all my heart and soul, sadly that you will never know',
      },
      {
        path: '/images/50/YAD_5933.jpg',
        description: 'Ti Amo',
      },
      {
        path: '/images/50/YAD_5935.jpg',
        description: '❣',
      },
    // Add more local file paths and descriptions as needed
  ]);

  const [images50, setImages50] = useState([
    {
        path: '/images/Half/08.jpg',
        description: 'Image 6 description',
      },
      {
        path: '/images/Half/09.jpg',
        description: 'The fear of losing you is what made me choose to love you silently',
      },
      {
        path: '/images/Half/010.jpg',
        description: '▶',
      },
      {
        path: '/images/Half/07.jpg',
        description: 'Image 6 description',
      },
      {
        path: '/images/Half/05.jpg',
        description: '♪♪♪ ヽ( ᐖゞ)',
      },
      {
        path: '/images/Half/04.jpg',
        description: 'Image 6 description',
      },
      {
        path: '/images/Half/03.jpg',
        description: 'Image 6 description',
      },
      {
        path: '/images/Half/06.jpg',
        description: 'Image 6 description',
      },
      {
        path: '/images/Half/02.jpg',
        description: 'Image 6 description',
      },
      {
        path: '/images/Half/08.jpg',
        description: 'Image 6 description',
      },
      {
        path: '/images/Half/01.jpg',
        description: 'Image 6 description',
      },
      {
        path: '/images/Half/5.jpg',
        description: 'Image 6 description',
      },
      {
        path: '/images/Half/3.jpg',
        description: 'Image 6 description',
      },
      {
        path: '/images/Half/9.jpg',
        description: '♪♪♪ ヽ( ᐖゞ)',
      },
      {
        path: '/images/Half/12.jpg',
        description: 'Secret love is cute until it starts to overflow and threatens to explode',
      }, {
        path: '/images/Half/10.jpg',
        description: '⏭',
      }, {
        path: '/images/Half/9.jpg',
        description: 'She loved him from afar. He loved her but had no courage to tell',
      },
    // Add more local file paths and descriptions as needed for the "50" container
  ]);

  const [imagesGebreal, setImagesGebreal] = useState([
    {
        path: '/images//Gebreal/1.jpg',
        description: '▶• ılıılıılıılııılıılı। 0',
      },
      {
        path: '/images//Gebreal/2.jpg',
        description: '‎ ♬ ₊.🎧⋆ ‎♪ ⋆⁺',
      },
      {
        path: '/images//Gebreal/3.jpg',
        description: '✈︎',
      },
      {
        path: '/images//Gebreal/4.jpg',
        description: '⏮',
      },
      {
        path: '/images//Gebreal/5.jpg',
        description: '♫₊˚.🎶 ✩.',
      },
      {
        path: '/images//Gebreal/6.jpg',
        description: '♫⋆｡♪ ₊♬ .',
      },
      {
        path: '/images//Gebreal/7.jpg',
        description: '𓆩🦋⃟ᴠɪᴘ•𝆺𝅥',
      },
      {
        path: '/images//Gebreal/8.jpg',
        description: '🎵🎧💃🕺🎶',
      },
      {
        path: '/images//Gebreal/9.jpg',
        description: '━╬٨ـﮩﮩ❤٨ـﮩﮩـ╬━',
      },
      {
        path: '/images//Gebreal/10.jpg',
        description: '🎷',
      },
      {
        path: '/images//Gebreal/11.jpg',
        description: '🍂🎧',
      },
      {
        path: '/images//Gebreal/12.jpg',
        description: '=͟͟͞♡',
      },
    // Add more local file paths and descriptions as needed for the "Gebreal" container
  ]);

  const [imagesTemeckt, setImagesTemeckt] = useState([
    {
        path: '/images/Timeket/1.jpg',
        description: '▶• ılıılıılıılııılıılı। 0',
      },
      {
        path: '/images/Timeket/2.jpg',
        description: '=͟͟͞♡',
      },
      {
        path: '/images/Timeket/3.jpg',
        description: '🍂🎧',
      },
      {
        path: '/images/Timeket/4.jpg',
        description: '━╬٨ـﮩﮩ❤٨ـﮩﮩـ╬━',
      },
      {
        path: '/images/Timeket/5.jpg',
        description: '🎵🎧💃🕺🎶',
      },
      {
        path: '/images/Timeket/6.jpg',
        description: '𓆩🦋⃟ᴠɪᴘ•𝆺𝅥',
      },
      {
        path: '/images/Timeket/7.jpg',
        description: '♫⋆｡♪ ₊♬ .',
      },
      {
        path: '/images/Timeket/8.jpg',
        description: '♫₊˚.🎶 ✩.',
      },
      {
        path: '/images/Timeket/9.jpg',
        description: '⏮',
      },
      {
        path: '/images/Timeket/10.jpg',
        description: '✈︎',
      },
      {
        path: '/images/Timeket/11.jpg',
        description: '‎ ♬ ₊.🎧⋆ ‎♪ ⋆⁺',
      },
      {
        path: '/images/Timeket/12.jpg',
        description: '━╬٨ـﮩﮩ❤٨ـﮩﮩـ╬━',
      },
      {
        path: '/images/Timeket/13.jpg',
        description: '★',
      },
      {
        path: '/images/Timeket/14.jpg',
        description: 'ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ',
      },
      {
        path: '/images/Timeket/15.jpg',
        description: '▒♫⧼ Ti Amo ⧽♫▒',
      },
      {
        path: '/images/Timeket/16.jpg',
        description: '⋆ ˚｡⋆୨♡୧⋆ ˚｡⋆',
      },
      {
        path: '/images/Timeket/17.jpg',
        description: 'Image 6 description',
      },
      {
        path: '/images/Timeket/18.jpg',
        description: '-ˋˏ ༻yeab༺ ˎˊ-',
      },
      {
        path: '/images/Timeket/19.jpg',
        description: '♪♪(oᐛ)o～♪♪',
      },
      {
        path: '/images/Timeket/20.jpg',
        description: '🎹',
      },
    // Add more local file paths and descriptions as needed for the "TEMECT" container
  ]);

  const [imagesAdaneHotel, setImagesAdaneHotel] = useState([
    {
        path: '/images/Adane/1.jpg',
        description: '𓂋 ཐི❤︎ཋྀ',
      },
      {
        path: '/images/Adane/2.jpg',
        description: '♬ ♪',
      },
      {
        path: '/images/Adane/3.jpg',
        description: '🎸⋆⭒˚.⋆',
      },
      {
        path: '/images/Adane/4.jpg',
        description: '♫⋆｡♪ ₊♬ ﾟ.',
      },
      {
        path: '/images/Adane/5.jpg',
        description: '🎧💿🎙️🎹。',
      },
      {
        path: '/images/Adane/6.jpg',
        description: '♡🎧✩∘˙♪٭',
      },
      {
        path: '/images/Adane/7.jpg',
        description: '😘',
      },
      {
        path: '/images/Adane/8.jpg',
        description: '( 💕 ŐωŐ 💕 )',
      },
      {
        path: '/images/Adane/9.jpg',
        description: '🎻ﮩ٨ﮩﮩ٨',
      },
      {
        path: '/images/Adane/10.jpg',
        description: '♡₊ 🦢・₊ ♪ ✧',
      },
    // Add more local file paths and descriptions as needed for the "ADANE HOTEL" container
  ]);
  const [imagesLuv, setImagesLuv] = useState([
    {
      path: '/images/Luv/1.jpg',
      description: 'Image 6 description',
    },
    {
      path: '/images/Luv/2.jpg',
      description: 'un oggi',
    },
    {
      path: '/images/Luv/3.jpg',
      description: 'Un oggi',
    },
    {
      path: '/images/Luv/4.jpg',
      description: 'Mei e Te',
    },
    {
      path: '/images/Luv/5.jpg',
      description: 'Image 6 description',
    },
    {
      path: '/images/Luv/6.jpg',
      description: 'Image 6 description',
    },
    {
      path: '/images/Luv/7.jpg',
      description: 'Image 6 description',
    },
    {
      path: '/images/Luv/8.jpg',
      description: 'Amo',
    },
    {
      path: '/images/Luv/9.jpg',
      description: 'Image 6 description',
    },
    {
      path: '/images/Luv/10.jpg',
      description: 'Image 6 description',
    },
    {
      path: '/images/Luv/11.jpg',
      description: 'Image 6 description',
    },
    {
      path: '/images/Luv/12.jpg',
      description: 'Image 6 description',
    },
    {
      path: '/images/Luv/13.jpg',
      description: 'Insieme',
    },
    {
      path: '/images/Luv/14.jpg',
      description: 'Image 6 description',
    },
    {
      path: '/images/Luv/15.jpg',
      description: 'Image 6 description',
    },
  ]);


  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };
  const handleShowMoreUs = () => {
    setVisibleUsImages(images.length);
  };

  const handleShowMore50 = () => {
    setVisibleImages50(images50.length);
  };

  const handleShowMoreGebreal = () => {
    setVisibleGebrealImages(imagesGebreal.length);
  };

  const handleShowMoreTemeckt = () => {
    setVisibleTemecktImages(imagesTemeckt.length);
  };

  const handleShowMoreAdaneHotel = () => {
    setVisibleAdaneHotelImages(imagesAdaneHotel.length);
  };

  const handleShowMoreLuv = () => {
    setVisibleLuvImages(imagesLuv.length);
  };
  const handleShowLessUs = () => {
    setVisibleUsImages(initialVisibleUsImages);
  };

  const handleShowLess50 = () => {
    setVisibleImages50(initialVisibleImages50);
  };

  const handleShowLessGebreal = () => {
    setVisibleGebrealImages(initialVisibleGebrealImages);
  };

  const handleShowLessTemeckt = () => {
    setVisibleTemecktImages(initialVisibleTemecktImages);
  };

  const handleShowLessAdaneHotel = () => {
    setVisibleAdaneHotelImages(initialVisibleAdaneHotelImages);
  };
  const handleShowLessLuv= () => {
    setVisibleLuvImages(initialVisibleLuvImages);
  };
  const handleDownload = (path) => {
    // Function to handle the download
    const link = document.createElement('a');
    link.href = path;
    link.download = 'image.jpg'; // You can set a dynamic name based on the image or any other logic
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="us-page">
      <h2>50 Day</h2>

      <div className="image-gallery">
        {/* Container "Us" Images */}
        {images.slice(0, visibleUsImages).map((image, index) => (
          <div key={index} className="image-container" onClick={() => handleImageClick(image)}>
            <img src={image.path} alt={`Image ${index + 1}`} />
            <p className="image-description">{image.description}</p>
            <button className="download-button" onClick={() => handleDownload(image.path)}>
            🢃
          </button>
          </div>
        ))}
      </div>

      {visibleUsImages < images.length && (
        <button className="show-more-button" onClick={handleShowMoreUs}>
          ➕
        </button>
      )}

      {visibleUsImages > initialVisibleUsImages && (
        <button className="show-less-button" onClick={handleShowLessUs}>
          ➖
        </button>
      )}

      <h2>Half Life</h2>

      <div className="image-gallery">
        {/* Container "50" Images */}
        {images50.slice(0, visibleImages50).map((image, index) => (
          <div key={`50_${index}`} className="image-container" onClick={() => handleImageClick(image)}>
            <img src={image.path} alt={`Image 50_${index + 1}`} />
            <p className="image-description">{image.description}</p>
            <button className="download-button" onClick={() => handleDownload(image.path)}>
            🢃
          </button>
          </div>
        ))}
      </div>

      {visibleImages50 < images50.length && (
        <button className="show-more-button" onClick={handleShowMore50}>
          ➕
        </button>
      )}

      {visibleImages50 > initialVisibleImages50 && (
        <button className="show-less-button" onClick={handleShowLess50}>
         ➖
        </button>
      )}

      <h2>Gebreal Images</h2>

      <div className="image-gallery">
        {imagesGebreal.slice(0, visibleGebrealImages).map((image, index) => (
          <div key={`gebreal_${index}`} className="image-container" onClick={() => handleImageClick(image)}>
            <img src={image.path} alt={`Gebreal Image ${index + 1}`} />
            <p className="image-description">{image.description}</p>
            <button className="download-button" onClick={() => handleDownload(image.path)}>
            🢃
          </button>
          </div>
        ))}
      </div>

      {visibleGebrealImages < imagesGebreal.length && (
        <button className="show-more-button" onClick={handleShowMoreGebreal}>
          ➕
        </button>
      )}

      {visibleGebrealImages > initialVisibleGebrealImages && (
        <button className="show-less-button" onClick={handleShowLessGebreal}>
         ➖
        </button>
      )}

      <h2>Timeket</h2>

      <div className="image-gallery">
        {/* Container "TEMECKT" Images */}
        {imagesTemeckt.slice(0, visibleTemecktImages).map((image, index) => (
          <div key={`temeckt_${index}`} className="image-container" onClick={() => handleImageClick(image)}>
            <img src={image.path} alt={`TEMECKT Image ${index + 1}`} />
            <p className="image-description">{image.description}</p>
            <button className="download-button" onClick={() => handleDownload(image.path)}>
            🢃
          </button>
          </div>
        ))}
      </div>

      {visibleTemecktImages < imagesTemeckt.length && (
        <button className="show-more-button" onClick={handleShowMoreTemeckt}>
        ➕
        </button>
      )}

      {visibleTemecktImages > initialVisibleTemecktImages && (
        <button className="show-less-button" onClick={handleShowLessTemeckt}>
          ➖
        </button>
      )}

      <h2>ADANE HOTEL</h2>

      <div className="image-gallery">
        {/* Container "ADANE HOTEL" Images */}
        {imagesAdaneHotel.slice(0, visibleAdaneHotelImages).map((image, index) => (
          <div key={`adaneHotel_${index}`} className="image-container" onClick={() => handleImageClick(image)}>
            <img src={image.path} alt={`ADANE HOTEL Image ${index + 1}`} />
            <p className="image-description">{image.description}</p>
            <button className="download-button" onClick={() => handleDownload(image.path)}>
            🢃
          </button>
          </div>
        ))}
      </div>

      {visibleAdaneHotelImages < imagesAdaneHotel.length && (
        <button className="show-more-button" onClick={handleShowMoreAdaneHotel}>
      ➕
        </button>
      )}

      {visibleAdaneHotelImages > initialVisibleAdaneHotelImages && (
        <button className="show-less-button" onClick={handleShowLessAdaneHotel}>
          ➖
        </button>
      )}

<h2>Luv</h2>

<div className="image-gallery">
  {/* Container "Luv" Images */}
  {imagesLuv.slice(0, visibleLuvImages).map((image, index) => (
    <div key={`luv_${index}`} className="image-container" onClick={() => handleImageClick(image)}>
      <img src={image.path} alt={`Luv Image ${index + 1}`} />
      <p className="image-description">{image.description}</p>
      <button className="download-button" onClick={() => handleDownload(image.path)}>
      🢃
          </button>
    </div>
  ))}
</div>

{visibleLuvImages < imagesLuv.length && (
  <button className="show-more-button" onClick={handleShowMoreLuv}>
   ➕
  </button>
)}

{visibleLuvImages > initialVisibleLuvImages && (
  <button className="show-less-button" onClick={handleShowLessLuv}>
    ➖
  </button>
)}
      {selectedImage && (
        <div className="image-popup" onClick={handleClosePopup}>
          <div className="popup-content">
            <span className="close-button" onClick={handleClosePopup}>
              &times;
            </span>
            <img src={selectedImage.path} alt="Popup Image" className="popup-image" />
            <p className="popup-description">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsPage;
