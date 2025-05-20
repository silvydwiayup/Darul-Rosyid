'use client';
import './Index.css'
import { useState, useRef } from "react";

const Admin_Index = () => {
    return(
        <Section_Admin_Index/>
    );
}

const Section_Admin_Index = () => {
    const [isContentVisible, setIsContentVisible] = useState(true);
    const [isTextVisible, setIsTextVisible] = useState(true);
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("");
    const [titleText, setTitleText] = useState("Pondok Pesantren Modern Darur Rosyid");
    const [subtitleText, setSubtitleText] = useState("Ini adalah teks di atas gambar yang ditengahkan.");
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        
        if (file) {
            if (!file.type.startsWith("image/")) {
                alert("File harus berupa gambar (jpg, png, dll).");
                return;
            }

            setImagePreview(URL.createObjectURL(file));
            setSelectedFileName(file.name);
        }
    };

    const handleSave = () => {
        alert("Data berhasil disimpan (dummy).");
    };

    const [initialData, setInitialData] = useState({
        title: "Pondok Pesantren Modern Darur Rosyid",
        subtitle: "Ini adalah teks di atas gambar yang ditengahkan.",
        image: null
    });

    const isChanged = () => {
        return (
            titleText !== initialData.title ||
            subtitleText !== initialData.subtitle ||
            imagePreview !== initialData.image
        );
    };

    const handleCancel = () => {
        setTitleText(initialData.title);
        setSubtitleText(initialData.subtitle);
        setImagePreview(initialData.image);
        setSelectedFileName("");

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return(
        <section className="section-admin-index">
            <div className="container-admin-index">
                <div className="container-admin-index-title">
                <h2>Halaman Utama</h2>
            </div>
            <div className="container-admin-index-header">
                <div className="container-admin-index-header-left">
                    <div className="container-admin-index-header-left-title">
                        <h3>Tampilan Halaman</h3>
                    </div>
                    {isContentVisible && (
                    <div className="container-admin-index-header-left-image">
                        <img src={imagePreview || "/images/index/dummy-pict.webp"} alt="" />
                        {isTextVisible && (
                            <div className="container-admin-index-header-left-image-text-overlay">
                                <h5>{titleText}</h5>
                                <span>{subtitleText}</span>
                            </div>
                        )}
                    </div>
                    )}
                </div>
                <div className="container-admin-index-header-right">
                    <div className="container-admin-index-header-right-title">
                        <h3>Edit Halaman</h3>
                    </div>
                    <div className="container-admin-index-header-right-control-panel">
                        {/* TOGGLE: Visibilitas Konten */}
                        <div className="container-admin-index-header-right-control-panel-togle-menu">
                            <span>Visibilitas konten :</span>
                            <label className="admin-index-toggle-switch">
                            <input
                                type="checkbox"
                                checked={isContentVisible}
                                onChange={() => setIsContentVisible(!isContentVisible)}
                            />
                            <span className="admin-index-slider" />
                            </label>
                        </div>

                        {/* TOGGLE: Visibilitas Text */}
                        <div className="container-admin-index-header-right-control-panel-togle-menu">
                            <span>Visibilitas Teks konten :</span>
                            <label className="admin-index-toggle-switch">
                            <input
                                type="checkbox"
                                checked={isTextVisible}
                                onChange={() => setIsTextVisible(!isTextVisible)}
                            />
                            <span className="admin-index-slider" />
                            </label>
                        </div>

                        {/* INPUT: Upload Gambar */}
                        <div className="container-admin-index-header-right-control-panel-upload-image">
                            <span>Ubah Gambar :</span>
                            
                            <label className="custom-file-upload">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    ref={fileInputRef}
                                />
                                Pilih Gambar
                            </label>

                            {selectedFileName && (
                                <span className="file-name">({selectedFileName})</span>
                            )}
                        </div>
                        {/* INPUT: title */}
                        <div className="container-admin-index-header-right-control-panel-text-input">
                            <label>
                                Judul:
                                <input
                                    type="text"
                                    value={titleText}
                                    onChange={(e) => setTitleText(e.target.value)}
                                    placeholder="Masukkan judul..."
                                />
                            </label>

                            <label>
                                Sub Judul:
                                <input
                                    type="text"
                                    value={subtitleText}
                                    onChange={(e) => setSubtitleText(e.target.value)}
                                    placeholder="Masukkan subjudul..."
                                />
                            </label>
                        </div>
                        {isChanged() && (
                            <div className="container-admin-index-header-right-control-panel-button">
                                <button className="btn-cancel" onClick={handleCancel}>Batal</button>
                                <button className="btn-save" onClick={handleSave}>Simpan</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Admin_Index;