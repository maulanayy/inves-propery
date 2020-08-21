import React, { Component } from "react";
import View from "./dashbard-view";
import axios from "axios";
import { API } from "../../config";
import { connect } from 'react-redux';
import moment from 'moment'
import { Button } from "antd";

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "Tanggal",
    dataIndex: "tanggal",
    key: "tanggal",
  },
  {
    title: "Tipe Transaksi",
    dataIndex: "tipe_transaksi",
    key: "tipe_transaksi",
  },
  {
    title: "Nama Properti",
    dataIndex: "nama_properti",
    key: "nama_properti",
  },
  {
    title: "Jumlah",
    dataIndex: "jumlah",
    key: "jumlah",
  },
];


class Dashboard extends Component {
  state = {
    transactions: [],
    stepIndex: 0,
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
        target: '.card-proyek-aktif',
        title: 'Tutorial',
        content: (
          <div style={{textAlign: 'left'}}>
            <p>Menampilkan jumlah proyek yang telah Kamu investasikan.</p>            
          </div>
        ),
        disableBeacon: true,
        placement: 'right',
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

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if(nextProps.user) {
      this.getTransactions(nextProps);
    }
  }


  getTransactions = async (props) => {
    let current = axios.CancelToken.source();

    let params = {
      token: props.user.token,
      token_email: props.user.email,
    }

    try {
      let dataTransactions = await API.transactions.getList(params, current.token)
      if(dataTransactions && dataTransactions.result) {
        let transactions = []
        dataTransactions.result && dataTransactions.result.map((item, key) => (
          transactions.push({
            key: item.id,
            no: key + 1,
            tanggal: moment(item.transaction_date).format("DD MMM YYYY"),
            tipe_transaksi: item.transaction.transaction_type,
            nama_properti: item.project.title,
            jumlah: item.transaction.total_payment,
          })
        ))
        this.setState({transactions: transactions})
      }

    } catch (error) {
      console.error("error : ", error);
    }
  }

  render() {
    const state = this.state

    return(<View 
      transactions={state.transactions} 
      steps={state.steps}
      stepIndex={state.stepIndex}
      columns={columns}
      location={this.props.location}
      />)
  }
}


const mapStateToProps = (state) => ({
  user: state.user
});


export default connect(mapStateToProps,null)(Dashboard);