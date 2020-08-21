import React, { Component } from "react";
import {
  LeftSideBar,
  RightSideBar,
  NavbarDashboard,
} from "../../components";

import { NavLink } from 'react-router-dom'
import { Table, Modal, Button } from "antd";
import Joyride, {STATUS, EVENTS, ACTIONS} from 'react-joyride';
import styled from 'styled-components'
import qs from 'qs'

const TooltipBody = styled.div`
  background-color: #fff;
  min-width: 290px;
  max-width: 420px;
  position: relative;
`;

const TooltipContent = styled.div`
  color: #000;
  padding: 20px;
`;

const TooltipTitle = styled.p`
  padding: 20px 20px 0 20px;
  margin: 0;
  font-family: "louisGeorgeCafe";
  font-size: 14px;
  color: #000;
`;

const TooltipFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;

  * + * {
    margin-left: 0.5rem;
  }

  ${Button} {
    padding: 0.8rem;
  }
`;

const Tooltip = ({
  continuous,
  index,
  step,
  backProps,
  skipProps,
  primaryProps,
  tooltipProps,
}) => (
  <TooltipBody {...tooltipProps}>
    {step.title && <TooltipTitle>{step.title}</TooltipTitle>}
    <TooltipContent>{step.content}</TooltipContent>
    <TooltipFooter className="tutorial-modal pt-0 mt-0">
      <div className="col-9 p-0 pl-1">
      {index > 0 && (
        <Button {...backProps} className="button back">
          Kembali
        </Button>
      )}
      {
        continuous &&
        (<Button {...primaryProps} className="button next" >
          Selanjutnya
        </Button>)
      }
      </div>
      <div className="col-3">
      {
        <Button {...skipProps} className="skip">  
          Lewati
        </Button>
      }
      </div>
    </TooltipFooter>
  </TooltipBody>
);

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepIndex: 0,
      showTutorial1: false,
      showTutorial2: false,
      showTutorialPortfolio: false
    }
  }

  componentDidMount() {
    let params = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    let stepIndex = (params.tutorial && parseInt(params.tutorial))
    if( stepIndex == 2) {
      this.setState({stepIndex: stepIndex, showTutorial2: true})
    }
    
  }

  handleClickStart = e => {
    e.preventDefault();

  };

  onClickTutorial = () => {
    this.setState({showTutorial1: true})
  }

  onShowTutorial2 = () => {
    this.setState({showTutorial2: true, showTutorial1: false, stepIndex: 0})
  }

  hideTutorial1 = () => {
    this.setState({showTutorial1: false})
  }

  handleJoyrideCallback = (data) => {
    const { action, index, status, type } = data;

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      // Update state to advance the tour
      this.setState({ stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) });
    }
    else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Need to set our running state to false, so we can restart if we click start again.
      document.location.href='/dashboard'
    }


    if( index >= 3 ){
      document.location.href='/portofolio?tutorial=true'
    }
    // tslint:disable:no-console
    // console.groupCollapsed(type);
    // this.setState({showTutorialPortfolio: (lifecycle == 'complete' && index >= 2)})
    // console.groupEnd();
    // tslint:enable:no-console
  };

  renderModalTutorial() {
    const { showTutorial1 } = this.state;
    return(<Modal 
      width={500}
      visible={showTutorial1}
      onCancel={this.hideTutorial1}
      footer={null}>
        <div className='container'>
          <h5 style={{fontWeight: 'bold', color: '#000'}} className='mt-5 mb-2'>Selamat Datang di Dashboard InvesProperti.id</h5>
          <p style={{fontSize: '11px', color: '#000'}} className='mt-3 mb-3'>Dashboard InvesProperti.id didesain untuk memudahkan Kamu dalam memantau 
perkembangan investasi. Di dalamnya terdapat informasi mengenai Saldo, 
Riwayat Transaksi, Portfolio, dan Informasi tentang profil Kamu.</p>
<p>
  <button className='btn button btn-primary' onClick={this.onShowTutorial2}>Mulai</button>
  <button className='btn btn-link' onClick={this.hideTutorial1}>Lewati</button>
</p>
        </div>
        
      </Modal>)
  }

  
  renderMainDashboard(){
    const props = this.props;
    
    return(
      <div className="main-dashboard" id="mainDashboard">
        <h5 className="title">Dashboard</h5>
        <div className="banner">
          <p>
            Kejar Mimpimu, <br />
            Mulai Investasi Sekarang! <br />
            <NavLink to="/properti" className="banner-button">
              Mulai >
            </NavLink>
          </p>
        </div>
        <div className="row balance">
          <div className="col-md-5half card-balance">
            <div className="row ">
              <div className="col-sm-5 my-auto">Saldo Proyek</div>
              <div className="col-sm-6 ml-4 ">IDR 40.000.000</div>
            </div>
            <div className="row">
              <div className="col-sm-5 mt-3">Saldo Affiliate</div>
              <div className="col-sm-6 ml-4 mt-3">IDR 2.000.000</div>
            </div>
          </div>
          <div className="col-md-5half card-balance withdraw">
            <div className="row ">
              <div className="col-sm-12">Total Saldo</div>
            </div>
            <div className="row">
              <div className="col-sm-6 mt-3 idr">IDR 42.000.000</div>
              <div className="col-sm-5 ml-1 mt-2 ">
                <a href="#" className="withdraw-button" onClick={this.handleClickStart}>
                  Withdraw
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row container">
          <div className="col-lg-11half card-info card-history-transaction">
            Riwayat Transaksi
            <Table dataSource={props.transactions} columns={props.columns} />
          </div>
        </div>
      </div>
      )
    }

  render() {
    const props = this.props;
    const { showTutorial2 } = this.state;

    return (
      <React.Fragment>
        { this.renderModalTutorial() }
        <div id="wrapper">
          <LeftSideBar 
            onClickTutorial={this.onClickTutorial}
          />
  
          <div id="content-wrapper" className="d-flex flex-column">
            <NavbarDashboard />
            {this.renderMainDashboard()}
            
          </div>
  
          <RightSideBar />
          <Joyride
          run={showTutorial2}
          callback={this.handleJoyrideCallback}
          tooltipComponent={Tooltip}
          continuous={true}
          showSkipButton={true}
          stepIndex={this.state.stepIndex}
          styles={{
            options: {
              zIndex: 1200
            }
          }}
            steps={props.steps}
          />
        </div>
      </React.Fragment>
    );
  
  }
};

export default View;
