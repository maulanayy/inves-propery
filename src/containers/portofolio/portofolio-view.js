import React, { Component } from "react";
import LeftSideBar from "../../components/LeftSideBar";
import RightSideBar from "../../components/RightSideBar";
import NavbarDashboard from "../../components/NavbarDashboard";
import Tutorial from "./portfolio-tutorial-view";
import {images} from "../../config";
import Joyride, {STATUS, EVENTS, ACTIONS} from 'react-joyride';
import styled from 'styled-components'
import { Button } from "antd";

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
  isLastStep
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
        (<Button {...(index < 5 ? primaryProps : skipProps)} className="button next" >
          {index < 5 ? 'Selanjutnya' : 'Selesai'}
        </Button>)
      }
      </div>
      <div className="col-3">
      {index < 5 &&
        (<Button {...skipProps} className="skip">  
          Lewati
        </Button>)
      }
      </div>
    </TooltipFooter>
  </TooltipBody>
);

class View extends Component {
  state = {
    stepIndex: 3
  }

  renderPortofolio = (props) => {
    return(
    <div className=" main-dashboard">
      <h5 className="title">Portofolio</h5>
        <div className="row">
          <div className="col-lg-11half">
            <a href="#" className="url">
              Semua
            </a>
            <a href="#" className="url">
              Aktif
            </a>
            <a href="#" className="url">
              Selesai
            </a>
            <div className="row ml-0">
              <div className="col-lg-3 card-proyek-counter text-center mr-4">
                <div className="row">
                  <div className="col text-center number ">1</div>
                </div>
                <div className="row">
                  <div className="col text-center">Proyek Aktif</div>
                </div>
                <div className="row">
                  <div className="col text-center number">2</div>
                </div>
                <div className="row">
                  <div className="col text-center">Proyek Selesai</div>
                </div>
                <div className="row">
                  <div className="col text-center number">3</div>
                </div>
                <div className="row">
                  <div className="col text-center">Total Proyek</div>
                </div>
              </div>

              <div className="col-lg-3 card-list mr-4">
                <div className="title-active">Aktif</div>
                <h5 className="card-title pl-3 pt-1 ">
                  Panorama Cihanjuang
                </h5>
                <img src={images.cardImg} className="card-img" alt="" />
                <div className="card-body">
                  <div className="row">
                    <div className="col">saldo</div>
                  </div>
                  <div className="row mt-1">
                    <div className="col">
                      <span className="idr">Rp2.000.000,00</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col"> Simulasi pendapatan</div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <span>Rp2.200.000 - Rp2.400.000</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-sm-5 pl-3 px-0 light-button">
                      <a href="#">Cek laman</a>
                    </div>
                    <div className="col-sm-6 pl-2 dark-button">
                      <a href="#">Perkembangan</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 card-list mr-4">
                <div className="title-done ">Selesai</div>
                <h5 className="card-title pl-3 pt-1 ">Cluster Linaya</h5>
                <img src={images.cardImg} className="card-img" alt="" />
                <div className="card-body">
                  <div className="row">
                    <div className="col">saldo</div>
                  </div>
                  <div className="row mt-1">
                    <div className="col">
                      <span className="idr">Rp5.000.000,00</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col"> Simulasi pendapatan</div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <span>Rp5.600.000,00</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-sm-5 pl-3 px-0 light-button">
                      <a href="#">Cek laman</a>
                    </div>
                    <div className="col-sm-6 pl-2 dark-button">
                      <a href="#">Perkembangan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-11half">
            <div className="row ml-0">
              <div className="col-lg-3 card-list mr-4">
                <div className="title-done">Selesai</div>
                <h5 className="card-title pl-2 pt-1 ">
                  Serenity Residence Bandung
                </h5>
                <img src={images.cardImg} className="card-img" alt="" />
                <div className="card-body">
                  <div className="row">
                    <div className="col">saldo</div>
                  </div>
                  <div className="row mt-1">
                    <div className="col">
                      <span className="idr">Rp2.000.000,00</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col"> Simulasi pendapatan</div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <span>Rp3.300.000,00</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-sm-5 pl-3 px-0 light-button">
                      <a href="#">Cek laman</a>
                    </div>
                    <div className="col-sm-6 pl-2 dark-button">
                      <a href="#">Perkembangan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )  
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

  
      if( index < 3 ){
        document.location.href='/dashboard?tutorial=true'
      }
    };
  
  
    render(){  
      const props = this.props;
      return (
        <React.Fragment>
          <div id="wrapper">
            <LeftSideBar />
    
            <div id="content-wrapper" className="d-flex flex-column">
              <NavbarDashboard />
              { props.renderTutorial ? <Tutorial /> : this.renderPortofolio(props)}
            </div>
    
            <RightSideBar />
            <Joyride
              stepIndex={this.state.stepIndex}
              run={props.renderTutorial}
              callback={this.handleJoyrideCallback}
              tooltipComponent={Tooltip}
              continuous={true}
              showSkipButton={true}
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
