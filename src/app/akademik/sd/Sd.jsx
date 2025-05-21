"use client";


import './Sd.css'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useRef, useEffect } from "react";


const Sekolah_Dasar = () => {
    return (
        <Container_Sd/>
    );
}


const Container_Sd = () => {
    
    const sliderRef = useRef(null);

    const scrollByCard = (direction) => {
        const slider = sliderRef.current;
        if (!slider) return;

        const card = slider.querySelector(".fasilitas-card-sd");
        if (!card) return;

        const scrollAmount = card.offsetWidth + 24;
        slider.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
    
        let isDown = false;
        let startX;
        let scrollLeftStart;
    
        const handleMouseDown = (e) => {
          isDown = true;
          slider.classList.add("active");
          startX = e.pageX - slider.offsetLeft;
          scrollLeftStart = slider.scrollLeft;
        };
    
        const handleMouseMove = (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 1.2;
          slider.scrollLeft = scrollLeftStart - walk;
        };
    
        const handleMouseUp = () => (isDown = false);
        const handleMouseLeave = () => (isDown = false);
        const handleTouchStart = (e) => {
          isDown = true;
          startX = e.touches[0].pageX - slider.offsetLeft;
          scrollLeftStart = slider.scrollLeft;
        };
        const handleTouchMove = (e) => {
          if (!isDown) return;
          const x = e.touches[0].pageX - slider.offsetLeft;
          const walk = (x - startX) * 1.2;
          slider.scrollLeft = scrollLeftStart - walk;
        };
        const handleTouchEnd = () => (isDown = false);
    
        slider.addEventListener("mousedown", handleMouseDown);
        slider.addEventListener("mousemove", handleMouseMove);
        slider.addEventListener("mouseup", handleMouseUp);
        slider.addEventListener("mouseleave", handleMouseLeave);
        slider.addEventListener("touchstart", handleTouchStart);
        slider.addEventListener("touchmove", handleTouchMove);
        slider.addEventListener("touchend", handleTouchEnd);
    
        return () => {
          slider.removeEventListener("mousedown", handleMouseDown);
          slider.removeEventListener("mousemove", handleMouseMove);
          slider.removeEventListener("mouseup", handleMouseUp);
          slider.removeEventListener("mouseleave", handleMouseLeave);
          slider.removeEventListener("touchstart", handleTouchStart);
          slider.removeEventListener("touchmove", handleTouchMove);
          slider.removeEventListener("touchend", handleTouchEnd);
        };
      }, []);
    
      const fasilitasSDData = [
        {
          src: "/images/akademik/sd/fasilitas-sd/lapangan-dummy.webp",
          alt: "Lapangan Bermain",
          title: "Lapangan Bermain",
        },
        {
          src: "/images/akademik/sd/fasilitas-sd/kelas-dummy.webp",
          alt: "Kelas Interaktif",
          title: "Kelas Interaktif",
        },
        {
          src: "/images/akademik/sd/fasilitas-sd/perpustakaan-dummy.webp",
          alt: "Perpustakaan Mini",
          title: "Perpustakaan Mini",
        },
        {
          src: "/images/akademik/sd/fasilitas-sd/ruang-musik-dummy.webp",
          alt: "Ruang Musik",
          title: "Ruang Musik & Seni",
        },
        {
          src: "/images/akademik/sd/fasilitas-sd/laboratorium-dummy.webp",
          alt: "Lab Komputer Anak",
          title: "Lab Komputer Anak",
        },
    ];
    
    return (
        <>
            {/* Header-sd */}        
            <div className="container-header-sd">
                <div className="section-header-sd">
                    <div className="header-sd">
                        <p className="sub-title-sd">Sekolah Dasar Islam Terpadu</p>
                        <h2 className="title-sd">Darur Rosyid</h2>
                    </div>
                </div>
            </div>

            {/* Deskripsi Sekolah */}
            <div className="container-deskripsi-sd">
                <div className="section-deskripsi-sd">
                    <div className="left-deskripsi-sd">
                        <div className="top-head-deskripsi-sd">
                            <p className="sub-title-deskripsi-sd">Selamat Datang di</p>
                            <h2 className="title-deskripsi-sd">SDIT DARUR ROSYID</h2>
                            <p className="sub-title-akreditasi-sd">TERAKREDITASI B</p>
                        </div>
                        <div className="bottom-deskripsi-sd">
                            <p className="text-deskripsi-sd">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus blanditiis aut, excepturi, quo distinctio ipsum rem iure iusto quidem eos totam exercitationem porro eveniet reprehenderit corrupti pariatur perferendis esse recusandae?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus blanditiis aut, excepturi, quo distinctio ipsum rem iure iusto quidem eos totam exercitationem porro eveniet reprehenderit corrupti pariatur perferendis esse recusandae?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus blanditiis aut, excepturi, quo distinctio ipsum rem iure iusto quidem eos totam exercitationem porro eveniet reprehenderit corrupti pariatur perferendis esse recusandae?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus blanditiis aut, excepturi, quo distinctio ipsum rem iure iusto quidem eos totam exercitationem porro eveniet reprehenderit corrupti pariatur perferendis esse recusandae?
                            </p>
                        </div>
                    </div>
                    <div className="right-deskripsi-sd">
                        <div className="img-deskripsi-sd-wrapper">
                            <img
                            src="/images/akademik/sd/deskripsi-sd/sd.webp"
                            alt="deskripsi-sd"
                            className="img-deskripsi-sd"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Visi Misi */}
            <div className="container-visi-misi-sd">
                <div className="section-visi-misi-sd">
                    <div className="visi-misi-sd-card">
                        <h3 className="title-visi-misi-sd">Visi</h3>
                        <p className="text-visi-sd">
                            Menjadi lembaga pendidikan dasar yang unggul dalam membentuk karakter islami, cerdas, dan berwawasan global.
                        </p>
                        <div className="moto-sd-wrapper">
                            <h4 className="moto-sd-title">Moto</h4>
                            <p className="moto-sd-text">"Belajar dengan Iman, Tumbuh dengan Ilmu, Berkarya dengan Akhlak"</p>
                        </div>
                    </div>
                    <div className="visi-misi-sd-card">
                        <h3 className="title-visi-misi-sd">Misi</h3>
                        <ul className="misi-list-sd">
                            <li><span>✔</span> Menanamkan nilai-nilai keislaman sejak dini.</li>
                            <li><span>✔</span> Meningkatkan kompetensi akademik dan non-akademik siswa.</li>
                            <li><span>✔</span> Mendorong kreativitas dan keterampilan abad 21.</li>
                            <li><span>✔</span> Mewujudkan lingkungan belajar yang aman dan menyenangkan.</li>
                            <li><span>✔</span> Menjalin kerjasama antara sekolah, orang tua, dan masyarakat.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Fasilitas SD */}
            <div className="container-fasilitas-sd">
                <div className="section-fasilitas-sd">
                    <div className="head-fasilitas-sd">
                        <h2 className="tittle-fasilitas-sd">Fasilitas Sekolah</h2>
                    </div>

                    <div className="slider-fasilitas-wrapper-sd">
                        <button className="slider-fasilitas-sd-button left" onClick={() => scrollByCard(-1)}>
                            <FaAngleLeft />
                        </button>

                        <div className="card-fasilitas-wrapper-sd" ref={sliderRef}>
                            {fasilitasSDData.map((item, index) => (
                            <div key={index} className="fasilitas-card-sd">
                                <img src={item.src} alt={item.alt} className="fasilitas-img-sd" />
                                <div className="fasilitas-overlay-sd">
                                <h3>{item.title}</h3>
                                </div>
                            </div>
                            ))}
                        </div>

                        <button className="slider-fasilitas-sd-button right" onClick={() => scrollByCard(1)}>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>







        
        
        </>
    );
}

export default Sekolah_Dasar;
