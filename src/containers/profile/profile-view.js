import React from "react";
import LeftSideBar from "../../components/LeftSideBar";
import RightSideBar from "../../components/RightSideBar";
import NavbarDashboard from "../../components/NavbarDashboard";
import { UploadOutlined } from '@ant-design/icons';
import LoadingOverlay from 'react-loading-overlay';
import { Input, Select, DatePicker, Button, Alert } from "antd";
import moment from 'moment';

const { Option } = Select;

const View = (props) => {
  let profile = props.profile;
  let provinces = props.provinces;
  let cities = props.cities;
  let npwpUploader = props.npwpUploader;
  let ktpUploader = props.ktpUploader;

  let optsTgl = [];
  for(var i = 1; i <= 31; i++){
    optsTgl.push(<Option value={i} key={i}>{i}</Option>)
  }

  let optsBln = [];
  for(var i = 1; i <= 12; i++){
    optsBln.push(<Option value={i} key={i}>{i}</Option>)
  }
  
  return (
    <React.Fragment>
      <div id="wrapper">
        <LeftSideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          <NavbarDashboard />
          <div className=" main-dashboard">
            <h5 className="title">Profil</h5>
            <div className="row ">
              <div className="col-lg-10 card-info pr-2">
                <form>
                  {
                      props.alert_message === null ? null : <div className="md-form mb-5">
                      <Alert message={props.alert_message} type={props.alert_type} closable></Alert>
                    </div>
                    }

                  <div className="row mb-3">
                    <div className="col-lg-5">
                      <label>Nama Lengkap</label>
                      <Input name="nama" value={profile.name} onChange={(e) => props.onChangeText(e, 'name')} required={true}/>
                    </div>
                  </div>
                  <div className="row mb-3">

                    <div className="col-lg-5 mr-2">
                      <label>Tanggal Lahir</label>
                      <br />
                      <DatePicker onChange={props.onChangeDate} style={{width: '100%'}} format='YYYY-MM-DD'  value={moment(profile.birthdate, 'YYYY-MM-DD')}/>
                      </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-5">
                      <label>No Telepon</label>
                      <Input name="telp" type="number" onChange={(e) => props.onChangeText(e, 'phone_number')} value={profile.phone_number}/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-3">

                      <label>Provinsi</label>
                      <br />
                      <Select value={parseInt(profile.province_id)} style={{width: '100%'}} onChange={(e) => props.loadCities(e)} dropdownMatchSelectWidth={false}>
                          { provinces && provinces.map(e => (
                            <Option value={e.id} key={e.id}>{e.name}</Option>
                          ))}                        
                      </Select>
                    </div>
                    <div className="col-3">
                      <label>Kota</label>
                      <br />
                      <Select value={profile.city_id ? parseInt(profile.city_id) : ''} style={{width: '100%'}}  onChange={(e) => props._setCity(e)} dropdownMatchSelectWidth={false} >
                          { cities && cities.map(e => (
                            <Option value={e.id} key={e.id}>{e.name}</Option>
                          ))}                        
                      </Select>
                    </div>
                    <div className="col-6">
                      <label>Alamat</label>
                      <Input name="address" onChange={(e) => props.onChangeText(e, 'address')} value={profile.address} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-6">
                      <label>No Ktp</label>
                      <Input name="ktp" onChange={(e) => props.onChangeText(e, 'personal_id_number')} value={profile.personal_id_number}/>
                    </div>
                    <div className="col-lg-4">
                      <label>Unggah Scan KTP</label>
                      <Input name="file-ktp" addonAfter={<UploadOutlined />} onClick={() => props.openInputUploader('file-ktp')} value={profile.personal_id_image}/>
                      <Input id="file-ktp" type="file" style={{display: 'none'}} onChange={(e) => props.onUploaded(e, 'ktp')}/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-6">
                      <label>No NPWP</label>
                      <Input name="npwp"  />
                    </div>
                    <div className="col-lg-4">
                      <label>Unggah Scan NPWP</label>
                      <Input name="file-npwp" addonAfter={<UploadOutlined />} onClick={() => props.openInputUploader('file-npwp')} value={profile.tax_id_image}/>
                      <Input id="file-npwp" type="file" style={{display: 'none'}} onChange={(e) => props.onUploaded(e, 'npwp')}/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-12 text-center">
                      <Button className="button btn" onClick={() => props.onSubmit()}>Simpan</Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <RightSideBar />
        
      </div>
      <LoadingOverlay
        active={props.isLoading}
        spinner
        text='Loading...'
        >
      </LoadingOverlay>
    </React.Fragment>
  );
};

export default View;
