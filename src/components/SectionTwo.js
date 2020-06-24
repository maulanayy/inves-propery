import React from "react";
import IntroTwo from "../../public/assets/Intro2.png";
import IntroThree from "../../public/assets/Intro3.png";
import IntroFour from "../../public/assets/Intro4.png";

const SectionTwo = () => {
  return (
    <section id="section-two">
      <div className="container">
        <div className="row">
          <div className="col-md-2 side"></div>
          <div className="col-lg-4">
            <h4 className="title">
              Cara Kerja <span>InvesProperti.id</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 side"></div>
          <div className="col-lg-3">
            <img src={IntroTwo} className="how-to-img" alt=""/>
            <h4>Cari</h4>
            <p>
              Temukan jenis atau proyek properti yang Anda inginkan dari daftar
              properti yang telah kami seleksi. Pastikan Anda juga menganalisis
              dan mengetahui resiko dan return dari tiap pilihan proyek properti
              yang ada.
            </p>
          </div>
          <div className="col-lg-3 ml-4">
            <img src={IntroFour} className="how-to-img" alt=""/>
            <h4>Investasi</h4>
            <p>
              Investasikan uang Anda pada projek properti kami secara online.
              Anda juga dapat menginvestasikan kembali hasil return dari
              portofolio investasi Anda sebelumnya di InvesProperti.
            </p>
          </div>
          <div className="col-lg-3 ml-4">
            <img src={IntroThree} className="how-to-img" alt=""/>
            <h4>Bagi Hasil</h4>
            <p>
              Dapatkan potensi passive income secara periodik dari harga sewa
              properti juga capital gain ketika properti dijual kembali atau
              diakhir masa proyek pembangunan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
