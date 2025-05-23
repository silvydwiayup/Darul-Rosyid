import './Contact.css'
import { FaPhone, FaWhatsapp, FaEnvelope, FaEdit  } from "react-icons/fa";

const Contact = () => {
    return(
        <Container_Contact/>
    );
}

const Container_Contact = () => {
    return(
            <>
                <div className="container-header-contact">
                    <div className="section-header-contact">
                        <button className="edit-button-header-contact">
                            Edit <FaEdit className="icon-edit-header-contact" />
                        </button>

                        <img src="/images/kontak/sma.webp" alt="Banner" className="background-image-header-contact" />
                        <div className="overlay-text-header-contact">
                            <h2>Kontak</h2>
                            <p>pondok pesantren modern darur rosyid</p>
                        </div>
                    </div>
                </div>

    
                {/* contact */}
                <div className="container-contact">
                    <button className="edit-button-contact">
                        Edit <FaEdit className="icon-edit-contact" />
                    </button>

                    <div className="section-contact">

                        <div className="header-contact">
                        <h2 className="title-contact">Hubungi Kami</h2>
                        <p className="sub-title-contact">
                            untuk informasi lebih detail mengenai pendaftaran dan hal lainnya segera hubungi kami
                        </p>
                        </div>

                        <div className="card-contact-wrapper">
                            <div className="contact-card">
                                <div className="icon-wrapper-contact">
                                <FaPhone className="icon-contact" />
                                </div>
                                <h3>Telepon</h3>
                                <a href="tel:0221234567" className="contact-link">022-1234567</a>
                            </div>

                            <div className="contact-card">
                                <div className="icon-wrapper-contact">
                                <FaWhatsapp className="icon-contact" />
                                </div>
                                <h3>WhatsApp</h3>
                                <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                                >
                                +62 812-3456-7890
                                </a>
                            </div>

                            <div className="contact-card">
                                <div className="icon-wrapper-contact">
                                <FaEnvelope className="icon-contact" />
                                </div>
                                <h3>Email</h3>
                                <a href="mailto:akademik@pondok.sch.id" className="contact-link">
                                akademik@pondok.sch.id
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
    
                {/* Alamat */}
                <div className="container-alamat">
                    <button className="edit-button-alamat">
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
