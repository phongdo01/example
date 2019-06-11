import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Card linkphoto="https://fss.com.vn/temp/-uploaded-San%20pham%20va%20dich%20vu_8.%20Datawarehouse%20-%20BI_cr_420x275.jpg"
                            tieude="Chứng khoán"
                            chitiet="Đây là dự án chứng khoán REVEX, mọi dữ liệu đã được cập nhật lên màn hình" />

                        <Card linkphoto="https://fss.com.vn/temp/-uploaded-San%20pham%20va%20dich%20vu_8.%20Datawarehouse%20-%20BI_cr_420x275.jpg"
                            tieude="Chứng khoán"
                            chitiet="Đây là dự án chứng khoán REVEX, mọi dữ liệu đã được cập nhật lên màn hình" />
                            
                        <Card linkphoto="https://fss.com.vn/temp/-uploaded-San%20pham%20va%20dich%20vu_8.%20Datawarehouse%20-%20BI_cr_420x275.jpg"
                            tieude="Chứng khoán"
                            chitiet="Đây là dự án chứng khoán REVEX, mọi dữ liệu đã được cập nhật lên màn hình" />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default List;