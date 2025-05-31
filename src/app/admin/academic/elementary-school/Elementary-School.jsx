"use client";


import './Elementary-School.css'
import { FaAngleRight, FaAngleLeft, FaEdit } from "react-icons/fa";
import { IoClose, IoAddSharp } from "react-icons/io5";
import { useRef, useEffect, useState } from "react";


const Elementary_School = () => {
    return (
        <Container_Elementary/>
    );
}


const Container_Elementary = () => {
    
    const sliderRef = useRef(null);

    const scrollByCard = (direction) => {
        const slider = sliderRef.current;
        if (!slider) return;

        const card = slider.querySelector(".fasilitas-card-elementary");
        if (!card) return;

        const scrollAmount = card.offsetWidth + 24;
        slider.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
    
        let ielementaryown = false;
        let startX;
        let scrollLeftStart;
    
        const handleMouseDown = (e) => {
          ielementaryown = true;
          slider.classList.add("active");
          startX = e.pageX - slider.offsetLeft;
          scrollLeftStart = slider.scrollLeft;
        };
    
        const handleMouseMove = (e) => {
          if (!ielementaryown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 1.2;
          slider.scrollLeft = scrollLeftStart - walk;
        };
    
        const handleMouseUp = () => (ielementaryown = false);
        const handleMouseLeave = () => (ielementaryown = false);
        const handleTouchStart = (e) => {
          ielementaryown = true;
          startX = e.touches[0].pageX - slider.offsetLeft;
          scrollLeftStart = slider.scrollLeft;
        };
        const handleTouchMove = (e) => {
          if (!ielementaryown) return;
          const x = e.touches[0].pageX - slider.offsetLeft;
          const walk = (x - startX) * 1.2;
          slider.scrollLeft = scrollLeftStart - walk;
        };
        const handleTouchEnd = () => (ielementaryown = false);
    
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
    
      const fasilitasElementaryData = [
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

    {/* MODAL */}

    {/* Header-elementary */} 
    const [showModalHeaderElementary, setShowModalHeaderElementary] = useState(false);

    {/* Deskripsi-elementary */} 
    const [showModalDeskripsiElementary, setShowModalDeskripsiElementary] = useState(false);
    
    {/* VisiMisi-elementary */} 
    const [showModalEditVisiElementary, setShowModalEditVisiElementary] = useState(false);
    const [showModalEditMotoElementary, setShowModalEditMotoElementary] = useState(false);
    const [showModalAddMisiElementary, setShowModalAddMisiElementary] = useState(false);
    const [showModalEditMisiElementary, setShowModalEditMisiElementary] = useState(false);

    {/* Fasilitas-elementary */} 
    const [showModalEditFasilitasElementary, setShowModalEditFasilitasElementary] = useState(false);
    const [fasilitasSelected, setFasilitasSelected] = useState(null);

    
    return (
        <>
            {/* Header-elementary */}        
            <div className="container-header-elementary">
                <button className="edit-button-header-elementary" onClick={() => setShowModalHeaderElementary (true)}>
                    Edit <FaEdit className="icon-edit-header-elementary" />
                </button>

                <div className="section-header-elementary">
                    <div className="header-elementary">
                        <p className="sub-title-elementary">Sekolah Dasar Islam Terpadu</p>
                        <h2 className="title-elementary">Darur Rosyid</h2>
                    </div>
                </div>

                {/* Modal */}
                {showModalHeaderElementary && (
                    <div className="modal-overlay-elementary">
                        <div className="modal-elementary">
                            <div
                                className="modal-close-elementary"
                                onClick={() => setShowModalHeaderElementary(false)}
                            >
                                <IoClose />
                            </div>
                            <h3>Edit Header SD</h3>

                            <label>
                                Sekolah Dasar:
                                <input
                                    type="text"
                                    placeholder="Masukkan sekolah dasar"
                                    className="modal-input-elementary"
                                />
                            </label>

                            <label>
                                Nama Sekolah:
                                <input
                                    type="text"
                                    placeholder="Masukkan nama sekolah"
                                    className="modal-input-elementary"
                                />
                            </label>

                            <div className="modal-actions-elementary">
                                <button className="save-button-elementary">Simpan</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            {/* Deskripsi Sekolah */}
            <div className="container-deskripsi-elementary">
                <button className="edit-button-deskripsi-elementary" onClick={() => setShowModalDeskripsiElementary(true)}>
                    Edit <FaEdit className="icon-edit-deskripsi-elementary" />
                </button>

                <div className="section-deskripsi-elementary">
                    <div className="left-deskripsi-elementary">
                        <div className="top-head-deskripsi-elementary">
                            <p className="sub-title-deskripsi-elementary">Selamat Datang di</p>
                            <h2 className="title-deskripsi-elementary">SDIT DARUR ROSYID</h2>
                            <p className="sub-title-akreditasi-elementary">TERAKREDITASI B</p>
                        </div>
                        <div className="bottom-deskripsi-elementary">
                            <p className="text-deskripsi-elementary">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus blanditiis aut, excepturi, quo distinctio ipsum rem iure iusto quidem eos totam exercitationem porro eveniet reprehenderit corrupti pariatur perferendis esse recusandae?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus blanditiis aut, excepturi, quo distinctio ipsum rem iure iusto quidem eos totam exercitationem porro eveniet reprehenderit corrupti pariatur perferendis esse recusandae?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus blanditiis aut, excepturi, quo distinctio ipsum rem iure iusto quidem eos totam exercitationem porro eveniet reprehenderit corrupti pariatur perferendis esse recusandae?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus blanditiis aut, excepturi, quo distinctio ipsum rem iure iusto quidem eos totam exercitationem porro eveniet reprehenderit corrupti pariatur perferendis esse recusandae?
                            </p>
                        </div>
                    </div>
                    <div className="right-deskripsi-elementary">
                        <div className="img-deskripsi-elementary-wrapper">
                            <img
                                src="/images/akademik/sd/deskripsi-sd/sd.webp"
                                alt="deskripsi-elementary"
                                className="img-deskripsi-elementary"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Modal */}
                {showModalDeskripsiElementary && (
                    <div className="modal-overlay-elementary">
                        <div className="modal-elementary">
                            <div
                                className="modal-close-elementary"
                                onClick={() => setShowModalDeskripsiElementary(false)}
                            >
                                <IoClose />
                            </div>
                            <h3>Edit Deskripsi SD</h3>

                            <label>
                                Sekolah Dasar:
                                <input
                                    type="text"
                                    placeholder="Masukkan sekolah dasar"
                                    className="modal-input-elementary"
                                />
                            </label>

                            <label>
                                Nama Sekolah :
                                <input
                                    type="text"
                                    placeholder="Masukkan nama sekolah"
                                    className="modal-input-elementary"
                                />
                            </label>

                            <label>
                                Akreditasi:
                                <input
                                    type="text"
                                    placeholder="Contoh: TERAKREDITASI A"
                                    className="modal-input-elementary"
                                />
                            </label>

                            <label>
                                Deskripsi Sekolah:
                                <textarea
                                    placeholder="Masukkan deskripsi"
                                    className="modal-textarea-elementary"
                                ></textarea>
                            </label>

                            <div className="modal-actions-elementary">
                                <button className="save-button-elementary">Simpan</button>
                            </div>
                        </div>
                    </div>
                    )}

            </div>

            {/* Visi Misi */}
            <div className="container-visi-misi-elementary">
                <div className="section-visi-misi-elementary">

                    {/* Kartu Visi dan Moto */}
                    <div className="visi-misi-elementary-card">
                        <div className="button-visi-top-right">
                            <button className="edit-button" onClick={() => setShowModalEditVisiElementary(true)}>
                                Edit <FaEdit className="icon-edit" />
                            </button>
                        </div>

                        <h3 className="title-visi-misi-elementary">Visi</h3>
                        <p className="text-visi-elementary">
                            Menjadi lembaga pendidikan dasar yang unggul dalam membentuk karakter islami,
                            cerdas, dan berwawasan global.
                        </p>

                        {/* Bagian Moto */}
                        <div className="moto-elementary-wrapper">
                            <div className="button-moto-top-right">
                                <button className="edit-button" onClick={() => setShowModalEditMotoElementary(true)}>
                                    Edit <FaEdit className="icon-edit" />
                                </button>
                            </div>

                            <h4 className="moto-elementary-title">Moto</h4>
                            <p className="moto-elementary-text">
                                "Belajar dengan Iman, Tumbuh dengan Ilmu, Berkarya dengan Akhlak"
                            </p>
                        </div>
                    </div>

                    {/* Kartu Misi */}
                    <div className="visi-misi-elementary-card">
                        <div className="button-vertical-top-right">
                            <button className="add-button" onClick={() => setShowModalAddMisiElementary(true)}>
                                Tambah <IoAddSharp />
                            </button>
                        </div>

                        <h3 className="title-visi-misi-elementary">Misi</h3>
                        <ul className="misi-list-elementary">
                            {[
                                "Meningkatkan kompetensi akademik dan non-akademik siswa.",
                                "Mendorong kreativitas dan keterampilan abad 21.",
                                "Mewujudkan lingkungan belajar yang aman dan menyenangkan.",
                                "Menjalin kerjasama antara sekolah, orang tua, dan masyarakat.",
                            ].map((text, i) => (
                                <li key={i}>
                                {text}
                                <button className="edit-button" onClick={() => setShowModalEditMisiElementary(true)}>
                                    Edit <FaEdit />
                                </button>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Modal Edit Visi SD */}
                {showModalEditVisiElementary && (
                    <div className="modal-overlay-elementary">
                        <div className="modal-elementary">
                            <div className="modal-close-elementary" onClick={() => setShowModalEditVisiElementary(false)}>
                                <IoClose />
                            </div>
                            <h3>Edit Visi SD</h3>
                            <label>
                                Isi:
                                <textarea className="modal-textarea-elementary" placeholder="Tulis visi SD di sini..."></textarea>
                            </label>
                            <div className="modal-actions-elementary">
                                <button className="save-button-elementary">Simpan</button>
                            </div>
                        </div>
                    </div>
                    )}

                    {/* Modal Edit Moto SD */}
                    {showModalEditMotoElementary && (
                        <div className="modal-overlay-elementary">
                            <div className="modal-elementary">
                                <div className="modal-close-elementary" onClick={() => setShowModalEditMotoElementary(false)}>
                                    <IoClose />
                                </div>
                                <h3>Edit Moto</h3>
                                <label>
                                    Isi:
                                    <textarea className="modal-textarea-elementary" placeholder="Tulis moto baru di sini..."></textarea>
                                </label>
                                <div className="modal-actions-elementary">
                                    <button className="save-button-elementary">Simpan</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Modal Tambah Misi SD */}
                    {showModalAddMisiElementary && (
                        <div className="modal-overlay-elementary">
                            <div className="modal-elementary">
                                <div className="modal-close-elementary" onClick={() => setShowModalAddMisiElementary(false)}>
                                    <IoClose />
                                </div>
                                <h3>Tambah Misi SD</h3>
                                <label>
                                    Isi:
                                    <textarea className="modal-textarea-elementary" placeholder="Tulis misi baru..."></textarea>
                                </label>
                                <div className="modal-actions-elementary">
                                    <button className="save-button-elementary">Simpan</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Modal Edit Misi SD */}
                    {showModalEditMisiElementary && (
                    <div className="modal-overlay-elementary">
                        <div className="modal-elementary">
                            <div className="modal-close-elementary" onClick={() => setShowModalEditMisiElementary(false)}>
                                <IoClose />
                            </div>
                            <h3>Edit Misi</h3>
                            <label>
                                Isi:
                                <textarea className="modal-textarea-elementary" placeholder="Ubah misi..."></textarea>
                            </label>
                            <div className="modal-actions-elementary">
                                <button className="delete-button-elementary">Hapus</button>
                                <button className="save-button-elementary">Simpan</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>


            {/* Fasilitas elementary */}
            <div className="container-fasilitas-elementary">
                <div className="section-fasilitas-elementary">
                    <div className="head-fasilitas-elementary">
                        <h2 className="title-fasilitas-elementary">Fasilitas Sekolah</h2>
                    </div>

                    <div className="slider-fasilitas-wrapper-elementary">
                    <button
                        className="slider-fasilitas-elementary-button left"
                        onClick={() => scrollByCard(-1)}
                    >
                        <FaAngleLeft />
                    </button>

                    <div className="card-fasilitas-wrapper-elementary" ref={sliderRef}>
                        {fasilitasElementaryData.map((item, index) => (
                            <div key={index} className="fasilitas-card-elementary">
                                <div className="fasilitas-card-actions">
                                <button
                                    className="edit-button-fasilitas-elementary"
                                    onClick={() => {
                                        setFasilitasSelected(item);
                                        setShowModalEditFasilitasElementary(true);
                                    }}
                                    >
                                    Edit
                                </button>
                                <button
                                    className="delete-button-fasilitas-elementary"
                                >
                                    Delete
                                </button>
                                </div>

                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="fasilitas-img-elementary"
                                />
                                <div className="fasilitas-overlay-elementary">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="slider-fasilitas-elementary-button right"
                        onClick={() => scrollByCard(1)}
                    >
                        <FaAngleRight />
                    </button>
                    </div>
                </div>

                {showModalEditFasilitasElementary && (
                    <div className="modal-overlay-elementary">
                        <div className="modal-elementary">
                            <div
                                className="modal-close-elementary"
                                onClick={() => setShowModalEditFasilitasElementary(false)}
                            >
                                <IoClose />
                            </div>
                            <h3>Edit Fasilitas</h3>
                            <label>
                                Judul:
                                <input
                                    type="text"
                                    className="modal-input-elementary"
                                    value={fasilitasSelected?.title || ""}
                                    onChange={(e) =>
                                        setFasilitasSelected({
                                        ...fasilitasSelected,
                                        title: e.target.value,
                                        })
                                    }
                                />
                            </label>
                            <label>
                                Gambar:
                                <input type="file" className="modal-input-elementary" />
                            </label>
                            <div className="modal-actions-elementary">
                                <button className="save-button-elementary">Simpan</button>
                            </div>
                        </div>
                    </div>
                    )}
            </div>








        
        
        </>
    );
}

export default Elementary_School;
