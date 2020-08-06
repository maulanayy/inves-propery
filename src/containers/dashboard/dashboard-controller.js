import React, { Component } from "react";
import View from "./dashbard-view";
import axios from "axios";
import { API } from "../../config";
import { connect } from 'react-redux';
import moment from 'moment'

class Dashboard extends Component {
  state = {
    transactions: []
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
      />)
  }
}


const mapStateToProps = (state) => ({
  user: state.user
});


export default connect(mapStateToProps,null)(Dashboard);