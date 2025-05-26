"use client";

import './About.css'
import { FaEdit  } from "react-icons/fa";
import { IoClose, IoAddSharp   } from "react-icons/io5";
import { useState } from "react";


const About = () => {
    return (
        <Section_About/>
    );
}

const Section_About = () => {
    {/* About Header */} 
    const [showModalAboutHeader, setShowModalAboutHeader] = useState(false);
    const [images, setImages] = useState({
        left: "https://suba-arch.com/wp-content/uploads/2021/06/Lumion-10-Pro-%E6%AD%A3%E7%89%88%E6%8E%88%E6%9D%83_12-Photo.jpg",
        rightTop: "https://www.multidesainarsitek.com/wp-content/uploads/2022/09/REAL-TAMPAK-MI-MAMBAUL-HUDA-2.jpg",
        rightBottom: "https://www.multidesainarsitek.com/wp-content/uploads/2022/09/GEDUNG-KELAS-PONDOK-PESANTREN-1-1038x576.jpg",
    });

    const handleImageChange = (e, position) => {
        const file = e.target.files[0];
        if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImages((prev) => ({ ...prev, [position]: imageUrl }));
        }
    };

    {/* About Main */} 
    const [showModalAboutMain, setShowModalAboutMain] = useState(false);
    
    {/* About Visi Misi */} 
    const [showModalEditVision, setShowModalEditVision] = useState(false);
    const [showModalAddMission, setShowModalAddMission] = useState(false);
    const [showModalEditMission, setShowModalEditMission] = useState(false);



    return (
        <section className='section-about'>
            <div className="container-about">
                <div className="about-title-header">
                        <h3>Tentang</h3>
                        <h2>Darur Rosyid</h2>
                </div>

                {/* About Header */} 
                <div className="about-header">
                    <div className="button-about-header">
                        <button className="edit-button-about-header" onClick={() => setShowModalAboutHeader(true)}>
                            Edit <FaEdit className="icon-edit-about-header" />
                        </button>
                    </div>

                    <div className="about-header-img">
                        <div className="about-left">
                            <img src={images.left} alt="" />
                        </div>
                        <div className="about-right">
                            <div className="about-right-top">
                                <img src={images.rightTop} alt="" />
                            </div>
                            <div className="about-right-bottom">
                                <img src={images.rightBottom} alt="" />
                            </div>
                        </div>
                    </div>

                    {showModalAboutHeader && (
                    <div className="modal-overlay-about">
                        <div className="modal-about">
                            <div className="modal-close-about" onClick={() => setShowModalAboutHeader(false)}>
                                <IoClose />
                            </div>
                            <h3>Edit Gambar</h3>
                            <label>
                                Gambar Kiri:
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "left")} />
                            </label>
                            <label>
                                Gambar Kanan Atas:
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "rightTop")} />
                            </label>
                            <label>
                                Gambar Kanan Bawah:
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "rightBottom")} />
                            </label>
                            <div className="modal-actions-about">
                                <button onClick={() => setShowModalAboutHeader(false)}>Simpan</button>
                            </div>
                        </div>
                    </div>
                    )}
                </div>

                {/* About Main */} 
                <div className="about-main">
                    <div className="button-about-main">
                        <button className="edit-button-about-main" onClick={() => setShowModalAboutMain(true)}>
                            Edit <FaEdit className="icon-edit-about-main" />
                        </button>
                    </div>
                    <div className="about-main-content">
                        <div className="about-main-left">
                            <img src="https://cdnpro.eraspace.com/media/mageplaza/blog/post/p/o/positive-confident-young-caucasian-male-office-worker-wearing-white-formal-shirt-classic-trousers-with-belt-having-happy-facial-expression-keeping-hands-pockets-smiling-joyfully_343059-4600.jpg" alt="" />
                        </div>
                        <div className="about-main-right">
                            <div className="about-main-right-title">
                                <h3>Selamat Datang di Official Website Darur Rosyid</h3>
                            </div>
                            <div className="about-main-right-paragraph">
                                <p>Pondok Pesantren Darur Rosyid merupakan lembaga pendidikan Islam yang berkomitmen membentuk generasi muda yang berakhlak mulia, berilmu, dan bertakwa. Dengan menggabungkan kurikulum pendidikan formal dan pendidikan pesantren, Darur Rosyid membina santri untuk memiliki kecakapan intelektual sekaligus spiritual. Para santri tidak hanya dibekali dengan ilmu agama seperti tahfidzul Qur’an, fiqih, dan aqidah, tetapi juga diajarkan ilmu pengetahuan umum untuk mempersiapkan mereka menghadapi tantangan zaman. Dengan lingkungan yang kondusif, disiplin, serta didukung oleh tenaga pengajar yang kompeten, pesantren ini menjadi tempat yang ideal untuk menumbuhkan karakter dan potensi generasi penerus bangsa.</p>
                                <h4>Lorem Ipsum</h4>
                                <span>Pimpinan Yayasan</span>
                            </div>
                        </div>
                    </div>

                    {showModalAboutMain && (
                        <div className="modal-overlay-about">
                            <div className="modal-about">
                                <div className="modal-close-about" onClick={() => setShowModalAboutMain(false)}>
                                    <IoClose />
                                </div>
                                <h3>Edit Kepala Sekolah</h3>
                                <label>
                                    Gambar Kiri:
                                    <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "left")} />
                                </label>
                                <label>
                                    Text :
                                    <input
                                        type="text"
                                    />
                                </label>
                                <label>
                                    Alamat:
                                    <textarea name="" id="" className="modal-textarea-about">

                                    </textarea>
                                </label>
                                <div className="modal-actions-about">
                                    <button onClick={() => setShowModalAboutMain(false)}>Simpan</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* About VisiMisi */} 
                <div className="about-vision-mision">
                    <div className="button-about-vision-mision">
                        <button className="edit-button-about-vision-mision" onClick={() => setShowModalEditVision(true)}>
                            Edit <FaEdit />
                        </button>
                    </div>

                    {/* Visi Section */}
                    <div className="about-vision-content">
                        <div className="about-vision">
                            <h3>Visi</h3>
                            <p>
                                Menjadi lembaga pendidikan Islam yang unggul dalam membentuk generasi
                                berakhlak, berilmu, dan bertakwa.
                            </p>
                        </div>
                    </div>

                    {/* Misi Section */}
                    <div className="about-mision-content">
                        <div className="mision-button">
                            <button className="add-button-about-mision" onClick={() => setShowModalAddMission(true)}>
                                Tambah <IoAddSharp />
                            </button>
                        </div>

                        <div className="about-mision">
                            <h3>Misi</h3>
                            <ul className="about-mision-list">
                            {[  "Mendidik santri dengan ilmu agama dan umum.",
                                "Menanamkan nilai-nilai moral dan spiritual.",
                                "Mengembangkan potensi dan karakter santri."].map((text, i) => (
                                <li key={i}>
                                    {text}
                                    <button className="edit-button-about-mision" onClick={() => setShowModalEditMission(true)}>
                                    Edit <FaEdit />
                                    </button>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Modal Edit Visi */}
                {showModalEditVision && (
                    <div className="modal-overlay-about">
                        <div className="modal-about">
                            <div className="modal-close-about" onClick={() => setShowModalEditVision(false)}>
                                <IoClose />
                            </div>
                            <h3>Edit Visi</h3>
                            <label>
                                Isi:
                                <textarea className="modal-textarea-about" placeholder="Tulis visi di sini..."></textarea>
                            </label>
                            <div className="modal-actions-about">
                                <button className="save-button-about">Simpan</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal Tambah Misi */}
                {showModalAddMission && (
                    <div className="modal-overlay-about">
                        <div className="modal-about">
                            <div className="modal-close-about" onClick={() => setShowModalAddMission(false)}>
                                <IoClose />
                            </div>
                            <h3>Tambah Misi</h3>
                            <label>
                                Isi:
                                <textarea className="modal-textarea-about" placeholder="Tulis misi baru..."></textarea>
                            </label>
                            <div className="modal-actions-about">
                                <button className="save-button-about">Simpan</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal Edit Misi */}
                {showModalEditMission && (
                <div className="modal-overlay-about">
                    <div className="modal-about">
                        <div className="modal-close-about" onClick={() => setShowModalEditMission(false)}>
                            <IoClose />
                        </div>
                        <h3>Edit Misi</h3>
                        <label>
                            Isi:
                            <textarea className="modal-textarea-about" placeholder="Ubah misi..."></textarea>
                        </label>
                        <div className="modal-actions-about">
                            <button className="delete-button-about">
                                Hapus
                            </button>
                            <button className="save-button-about">Simpan</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </section>
    )
}

export default About;