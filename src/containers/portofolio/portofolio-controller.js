import React, { Component } from "react";
import View from "./portofolio-view";
import qs from 'qs'

class Portfolio extends Component {
  state = {
    steps: [
      {
        target: '.withdraw',
        title: 'Tutorial',
        content: (
          <div style={{textAlign: 'left'}}>
            <p>Ini merupakan rangkuman tampilan dari saldo Kamu, termasuk di dalamnya saldo proyek, saldo affiliate, dan total saldo keseluruhan. </p>            
          </div>
        ),
        disableBeacon: true,
        placement: 'top',
        styles: {
          zIndex: 1200
        },
      },
      {
        target: '.withdraw-button',
        title: 'Tutorial',
        content: (
          <div style={{textAlign: 'left'}}>
            <p>Kamu dapat menyimpan keuntungan investasi yang Kamu dapat dan menggunakannya untuk investasi selanjutnya atau menarik uang tersebut.</p>            
          </div>
        ),
        disableBeacon: true,
        placement: 'top',
        styles: {
          zIndex: 1200
        },
      },
      {
        target: '.card-history-transaction',
        title: 'Tutorial',
        content: (
          <div style={{textAlign: 'left'}}>
            <p>Menampilkan riwayat transaksi yang telah Kamu lakukan secara detail.</p>            
          </div>
        ),
        disableBeacon: true,
        placement: 'top',
        styles: {
          zIndex: 1200
        },
      },
      {
        target: '.card-proyek-summary',
        title: 'Tutorial',
        content: (
          <div style={{textAlign: 'left'}}>
            <p>Menampilkan masing-masing proyek yang telah Kamu investasikan. Kamu dapat melihat status proyek, jumlah investasi , dan simulasi keuntungan yang akan Kamu dapatkan.</p>            
          </div>
        ),
        disableBeacon: true,
        placement: 'right',
        styles: {
          zIndex: 1200
        },
      },
      {
        target: '.card-proyek-aktif',
        title: 'Tutorial',
        content: (
          <div style={{textAlign: 'left'}}>
            <p>Menampilkan jumlah proyek yang telah Kamu investasikan.</p>            
          </div>
        ),
        disableBeacon: true,
        placement: 'bottom',
        styles: {
          zIndex: 1200
        },
      },
      
      {
        target: 'body .notification',
        content: (
          <div style={{textAlign: 'left'}}>
            <p >Kamu akan mendapatkan notifikasi untuk promo, keberhasilan transaksi, dan informasi mengenai proyek yang kami jalankan.</p>
          </div>
        ),
        disableBeacon: true,
        placement: 'left',
        styles: {
          zIndex: 1200
        }

      },
      ,            
    ]
  }
  render(){
    let params = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    
    return(
      <View 
      renderTutorial={params && params.tutorial === 'true'}
      steps={this.state.steps}
      />
    )
  }
};

export default Portfolio;
