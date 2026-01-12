import './App.css'
import PhotoCard from './components/PhotoCard'

import HeroSection from './components/HeroSection'
import { useState, useEffect } from 'react'
// import { supabase } from './supabaseClient'

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  // Lógica de Supabase eliminada

  const photos = [
    { 
      id: 1, 
      title: "Hakuna Cinema", 
      caption: "Recuerdo ese día con mucho gusto, neta me reí mucho y disfruté pasarlo contigo y los chicos.",
      imageUrl: '/src/assets/IMG_0965.jpg'
    },
    { 
      id: 2, 
      title: "Dream Team", 
      caption: "Óscar, Francisco, Natalia y tú son de lo más bonito que me dió Dios en los tiempos de pastoral, es importante recordar que tú fuiste el pegamento del grupo.",
      imageUrl: '/src/assets/IMG_4308.jpg'
    },
    { 
      id: 3, 
      title: "Misión Semana Santa", 
      caption: "Aún me parece increíble que después de tantos años, apenas nos fuimos de misiones juntas, pero mejor tarde que nunca.",
      imageUrl: '/src/assets/IMG_4391.jpg'
    },
    { 
      id: 4, 
      title: "Juntas en todo momento", 
      caption: "Neta se puede ver nuestro cansancio pero también el gozo de servir juntas, es lindo tener el mismo recorrido juntas.",
      imageUrl: '/src/assets/IMG_4426 2.jpg'
    },
    { 
      id: 5, 
      title: "Lo más valioso", 
      caption: "Lo más valioso de nuestra amistad y nuestra razón de ser, siempre será Dios, por Él y para Él.",
      imageUrl: '/src/assets/IMG_4432.jpg'
    },
    { 
      id: 6, 
      title: "Rodeo (ajúa)", 
      caption: "¿Recuerdas las ganas quee teníamos de ir al rodeo juntas?  pues se CUMPLIÓ, comer chamorro juntas me hizo dar cuenta del momentazo que vivimos.",
      imageUrl: '/src/assets/IMG_4950 2.jpg'
    },
    { 
      id: 7, 
      title: "En los momentos correctos", 
      caption: "Amiga aunque hay veces que no nos podamos ver, cada que estés aquí representa un curita al corazón.",
      imageUrl: '/src/assets/IMG_7889.jpg'
    },
    { 
      id: 8, 
      title: "Que nunca falten las risas", 
      caption: "Eres muy auténtica y con el corazón más enomre que he conocido.",
      imageUrl: '/src/assets/IMG_8255 2.JPG'
    },
    { 
      id: 9, 
      title: "Docenario", 
      caption: "Nai, sabes cuanto amo el docenario, y verte esas fechas fue de los mejores regalos de Navidad que God me pudo dar.",
      imageUrl: '/src/assets/IMG_8546.jpg'
    },
    { 
      id: 10, 
      title: "Tu día especial", 
      caption: "Tu graduación fue de los highlights del año. ¿Cómo es posible que tenemos tanto de conocernos? Lo más importante es que nos hemos apoyado estos años como pequeñas foráneas a adultas independientes.",
      imageUrl: '/src/assets/IMG_8657.jpg'
    },
    { 
      id: 11, 
      title: "Siempre brilla", 
      caption: "Que nada y nadie apague dentro de ti tu amor, convicción, inteligencia, empatía, humor y a Dios. Eres única e irremplazable. Te quiero amiga -Atte. GabyMtz",
      imageUrl: '/src/assets/IMG_8662.jpg'
    }
  ]

  const openModal = (photo) => setSelectedPhoto(photo)
  const closeModal = () => setSelectedPhoto(null)

  return (
    <div className="app-container">
      <HeroSection />

      <main className="app-main">

        <section className="section">
          <h2>Mosaicos de Nosotras</h2>
          <p>
            Tantos años de amistad, en los que cada foto cuenta una historia.
            Aunque la distancia sea grande, nuestros recuerdos nos mantienen unidas.
          </p>
        </section>

        <section className="gallery-container">
          <div className="intro-section">
            <h2>Galería de Recuerdos</h2>
            <p>Todo lo vivido (aún falta vivir más).</p>
          </div>
          
          <div className="photos-grid">
            {photos.map((photo) => (
              <PhotoCard 
                key={photo.id}
                id={photo.id}
                title={photo.title}
                caption={photo.caption}
                imageUrl={photo.image_url || photo.imageUrl}
                onClick={() => openModal(photo)}
              />
            ))}
          </div>
        </section>

        {/* Se eliminó la sección de subir fotos y PhotoForm */}
      </main>

      {selectedPhoto && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <img 
              src={selectedPhoto.image_url || selectedPhoto.imageUrl || `https://placekitten.com/${selectedPhoto.id}/600`}
              alt={selectedPhoto.title}
              className="modal-image"
            />
            <div className="modal-text">
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App