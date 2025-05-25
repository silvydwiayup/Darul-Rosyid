"use client";

import './Contact.css'
import { FaPhone, FaWhatsapp, FaEnvelope, FaEdit  } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Contact = () => {
    return(
        <Container_Contact/>
    );
}

const Container_Contact = () => {
    {/* Modal Header Contact */}
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState("/images/kontak/sma.webp");
    const [title, setTitle] = useState("Kontak");
    const [subtitle, setSubtitle] = useState("pondok pesantren modern darur rosyid");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imgURL = URL.createObjectURL(file);
            setImage(imgURL);
        }
    };

    {/* Modal Contact */}
    const [showContactModal, setShowContactModal] = useState(false);
    const [phone, setPhone] = useState("022-1234567");
    const [whatsapp, setWhatsapp] = useState("6281234567890");
    const [email, setEmail] = useState("akademik@pondok.sch.id");

    {/* Modal Alamat Contact */}
    const [showAlamatContactModal, setShowAlamatContactModal] = useState(false);


    return(
            <>
                {/* Header Contact */}            
                <div className="container-header-contact">
                    <div className="section-header-contact">
                        <button
                            className="edit-button-header-contact"
                            onClick={() => setShowModal(true)}
                        >
                        Edit <FaEdit className="icon-edit-header-contact" />
                        </button>

                        <img src={image} alt="Banner" className="background-image-header-contact" />
                        <div className="overlay-text-header-contact">
                            <h2>{title}</h2>
                            <p>{subtitle}</p>
                        </div>
                    </div>

                    {/* Modal Header Contact */}
                    {showModal && (
                        <div className="modal-overlay-header-contact">
                            <div className="modal-header-contact">
                                <div className="modal-close-button-header-contact" onClick={() => setShowModal(false)}>
                                    <IoClose />
                                </div>                              
                                <h3>Edit Header</h3>
                                <label>
                                    Ganti Gambar:
                                    <input type="file" accept="image/*" onChange={handleImageChange} />
                                </label>
                                <label>
                                    Judul :
                                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </label>
                                <label>
                                    Subjudul :
                                    <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                                </label>
                                <div className="modal-actions-header-contact">
                                    <button onClick={() => setShowModal(false)}>Simpan</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

    
                {/* contact */}
                <div className="container-contact">
                    <button
                        className="edit-button-contact"
                        onClick={() => setShowContactModal(true)}
                    >
                        Edit <FaEdit className="icon-edit-contact" />
                    </button>

                    <div className="section-contact">
                        <div className="header-contact">
                        <h2 className="title-contact">Hubungi Kami</h2>
                        <p className="sub-title-contact">
                            untuk informasi lebih detail mengenai pendaftaran dan hal lainnya
                            segera hubungi kami
                        </p>
                        </div>

                        <div className="card-contact-wrapper">
                            <div className="contact-card">
                                <div className="icon-wrapper-contact">
                                    <FaPhone className="icon-contact" />
                                </div>
                                <h3>Telepon</h3>
                                <a href={`tel:${phone}`} className="contact-link">
                                {phone}
                                </a>
                            </div>

                            <div className="contact-card">
                                <div className="icon-wrapper-contact">
                                    <FaWhatsapp className="icon-contact" />
                                </div>
                                <h3>WhatsApp</h3>
                                <a
                                    href={`https://wa.me/${whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                +{whatsapp.replace(/(\d{2})(\d{3})(\d{4})(\d{3})/, "$1 $2-$3-$4")}
                                </a>
                            </div>

                            <div className="contact-card">
                                <div className="icon-wrapper-contact">
                                    <FaEnvelope className="icon-contact" />
                                </div>
                                <h3>Email</h3>
                                <a href={`mailto:${email}`} className="contact-link">
                                {email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}
                    {showContactModal && (
                        <div className="modal-overlay-contact">
                            <div className="modal-contact">
                                <div
                                    className="modal-close-button-contact"
                                    onClick={() => setShowContactModal(false)}
                                >
                                <IoClose />
                                </div>
                                <h3>Edit Kontak</h3>

                                <label>
                                    Telepon:
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </label>

                                <label>
                                    WhatsApp (tanpa +):
                                    <input
                                        type="text"
                                        value={whatsapp}
                                        onChange={(e) => setWhatsapp(e.target.value)}
                                    />
                                </label>

                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>

                                <div className="modal-actions-contact">
                                    <button onClick={() => setShowContactModal(false)}>Simpan</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
    
                {/* Alamat */}
                <div className="container-alamat">
                    <button className="edit-button-alamat" onClick={() => setShowAlamatContactModal(true)}>
                        Edit <FaEdit className="icon-edit-alamat" />
                    </button>

                    <div className="section-alamat">
                        <div className="header-alamat">
                            <h2 className="title-alamat">Alamat</h2>
                        </div>

                        <div className="body-alamat">
                            <div className="alamat-card">
                                <h3>Pondok Pesantren Darur Rosyid</h3>
                                <p>
                                    Jl. Lingkungan III, RT.10/RW.9, Tegal Alur, Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11820
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {showAlamatContactModal && (
                    <div className="modal-overlay-contact">
                        <div className="modal-contact">
                            <div
                                className="modal-close-button-contact"
                                onClick={() => setShowAlamatContactModal(false)}
                            >
                            <IoClose />
                            </div>
                            <h3>Edit Kontak</h3>

                            <label>
                                Alamat:
                                <textarea name="" id="" className="modal-textarea-contact">

                                </textarea>
                            </label>

                            <div className="modal-actions-contact">
                                <button onClick={() => setShowAlamatContactModal(false)}>Simpan</button>
                            </div>
                        </div>
                    </div>
                )}

    
                {/* Maps */}
                <div className="container-maps">
                    <div className="sections-maps">
                        <iframe
                            className="maps"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.405933163134!2d106.707281!3d-6.1071349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02dae694b7c7%3A0xa6d5190ab1410046!2sPondok%20Pesantren%20Darur%20Rosyid!5e0!3m2!1sid!2sid!4v1716280000000!5m2!1sid!2sid">
                        </iframe>
                    </div>
                </div>
    
            </>
        );
}

export default Contact;
