import './Living.css'

const Living = () => {
    return(
        <Container_Living/>
    );
}

const Container_Living = () => {
    return(
        <>
            <div className="container-living">
                <div className="section-living">
                    <div className="header-living">
                        <h2 className="title-living">Fasilitas Pesantren</h2>
                    </div>
                </div>
            </div>
            
            {/* Fasilitas Unggulan */}
            <div className="container-fasilitas-unggulan">
                <div className="section-fasilitas-unggulan">
                    <div className="right-fasilitas-unggulan">
                        <div className="img-fasilitas-wrapper">
                            <img
                                src="/images/kehidupan-pesantren/fasilitas-unggulan.webp"
                                alt="Fasilitas Unggulan"
                                className="img-fasilitas-unggulan"
                            />
                        </div>
                    </div>
                    <div className="left-fasilitas-unggulan">
                        <div className="top-head-fasilitas-unggulan">
                            <h2 className="title-fasilitas-unggulan">Fasilitas Unggulan</h2>
                        </div>
                        <div className="bottom-fasilitas-unggulan">
                            <p className="text-fasilitas-unggulan">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolorum aspernatur eum voluptatem nemo deleniti, illo accusamus omnis nihil. Sunt quis saepe dignissimos temporibus! Voluptatum similique cupiditate maiores nisi eaque!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam eius, amet possimus nam excepturi minima vero aliquid pariatur corrupti quia? Earum illum numquam tempora quasi? Dolorum qui recusandae eos?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam eius, amet possimus nam excepturi minima vero aliquid pariatur corrupti quia? Earum illum numquam tempora quasi? Dolorum qui recusandae eos?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam eius, amet possimus nam excepturi minima vero aliquid pariatur corrupti quia? Earum illum numquam tempora quasi? Dolorum qui recusandae eos?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fasilitas Olahraga */}
            <div className="container-fasilitas-olahraga">
                <div className="section-fasilitas-olahraga">
                    <div className="left-fasilitas-olahraga">
                        <div className="top-head-fasilitas-olahraga">
                            <h2 className="title-fasilitas-olahraga">Fasilitas Olahraga</h2>
                        </div>
                        <div className="bottom-fasilitas-olahraga">
                            <p className="text-fasilitas-olahraga">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus blanditiis aut, excepturi, quo distinctio ipsum rem iure iusto quidem eos totam exercitationem porro eveniet reprehenderit corrupti pariatur perferendis esse recusandae?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus blanditiis aut, excepturi, quo distinctio ipsum rem iure iusto quidem eos totam exercitationem porro eveniet reprehenderit corrupti pariatur perferendis esse recusandae?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus blanditiis aut, excepturi, quo distinctio ipsum rem iure iusto quidem eos totam exercitationem porro eveniet reprehenderit corrupti pariatur perferendis esse recusandae?
                            </p>
                        </div>
                    </div>
                    <div className="right-fasilitas-olahraga">
                        <div className="img-olahraga-wrapper">
                            <img
                            src="/images/kehidupan-pesantren/fasilitas-olahraga.webp"
                            alt="Fasilitas olahraga"
                            className="img-fasilitas-olahraga"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fasilitas Ibadah */}
            <div className="container-fasilitas-ibadah">
                <div className="section-fasilitas-ibadah">
                    <div className="right-fasilitas-ibadah">
                        <div className="img-fasilitas-ibadah">
                            <img
                                src="/images/kehidupan-pesantren/fasilitas-ibadah.webp"
                                alt="Fasilitas ibadah"
                                className="img-fasilitas-ibadah"
                            />
                        </div>
                    </div>
                    <div className="left-fasilitas-ibadah">
                        <div className="top-head-fasilitas-ibadah">
                            <h2 className="title-fasilitas-ibadah">Fasilitas Ibadah</h2>
                        </div>
                        <div className="bottom-fasilitas-ibadah">
                            <p className="text-fasilitas-ibadah">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolorum aspernatur eum voluptatem nemo deleniti, illo accusamus omnis nihil. Sunt quis saepe dignissimos temporibus! Voluptatum similique cupiditate maiores nisi eaque!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam eius, amet possimus nam excepturi minima vero aliquid pariatur corrupti quia? Earum illum numquam tempora quasi? Dolorum qui recusandae eos?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam eius, amet possimus nam excepturi minima vero aliquid pariatur corrupti quia? Earum illum numquam tempora quasi? Dolorum qui recusandae eos?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam eius, amet possimus nam excepturi minima vero aliquid pariatur corrupti quia? Earum illum numquam tempora quasi? Dolorum qui recusandae eos?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aktivitas Pesantren */}
            <div className="container-aktivitas-pesantren">
                <div className="section-aktivitas">
                    <div className="head-aktivitas">
                        <h2 className="tittle-aktivitas">Aktivitas Pesantren</h2>
                    </div>
                    <div className="card-wrapper-aktivitas">
                        <div className="card-aktivitas">
                            <img
                                src="/images/kehidupan-pesantren/aktivitas/aktivitas-dummy.webp"
                                alt="aktivitas-card"
                                className="aktivitas-img"
                            />
                            <div className="aktivitas-overlay">
                                <h3>Kesenian & Budaya</h3>
                            </div>
                        </div>
                        <div className="card-aktivitas">
                            <img
                                src="/images/kehidupan-pesantren/aktivitas/aktivitas-dummy.webp"
                                alt="aktivitas-card"
                                className="aktivitas-img"
                            />
                            <div className="aktivitas-overlay">
                                <h3>Olahraga</h3>
                            </div>
                        </div>
                        <div className="card-aktivitas">
                            <img
                                src="/images/kehidupan-pesantren/aktivitas/aktivitas-dummy.webp"
                                alt="aktivitas-card"
                                className="aktivitas-img"
                            />
                            <div className="aktivitas-overlay">
                                <h3>Kerohanian</h3>
                            </div>
                        </div>
                        <div className="card-aktivitas">
                            <img
                                src="/images/kehidupan-pesantren/aktivitas/aktivitas-dummy.webp"
                                alt="aktivitas-card"
                                className="aktivitas-img"
                            />
                            <div className="aktivitas-overlay">
                                <h3>Penalaran</h3>
                            </div>
                        </div>
                        <div className="card-aktivitas">
                            <img
                                src="/images/kehidupan-pesantren/aktivitas/aktivitas-dummy.webp"
                                alt="aktivitas-card"
                                className="aktivitas-img"
                            />
                            <div className="aktivitas-overlay">
                                <h3>Sosial</h3>
                            </div>
                        </div>
                        <div className="card-aktivitas">
                            <img
                                src="/images/kehidupan-pesantren/aktivitas/aktivitas-dummy.webp"
                                alt="aktivitas-card"
                                className="aktivitas-img"
                            />
                            <div className="aktivitas-overlay">
                                <h3>Kegiatan Lainnya</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        
        </>
    );
}

export default Living;