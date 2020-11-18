import React from 'react';
import PageHeader from './PageHeader.js';

const btnstyle={
  border: 0,
  color: "black",
  background: "white",
  fontSize: 36,
  marginLeft: 30,
  marginTop: 10,
}

const stnstyle={
  border: 0,
  color: "black",
  background: "white",
  fontSize: 24,
  marginLeft:30,
}
const searchbarstyle={
  color: "black",
  background: "#C4C4C4",
  fontSize: 17,
  marginLeft:30,
  height: 29,
  width: 600,
  marginRight: 10,
  marginTop: 10,  
}

class FinishedWork extends React.Component {
    render() {
        return (
            <section className="main">
                <div className="main header">
                    <nav className="navbar">
                        <ui class="navbar_logo">
                            <li><button className="header-button" onClick={() => this.props.setPage("main")}>YuĮ�븮</button></li>
                        </ui>
                        <ui class="navbar_writing">
                            <li><button className="header-button" onClick={() => this.props.setPage("main")}>�Ҽ� �ۼ���</button></li>
                            <li><button className="header-button" onClick={() => this.props.setPage("finished")}>�ϰ� ��ǰ��</button></li>
                        </ui>
                        <ui class="navbar_menu">
                            <li><button className="header-button" onClick={() => this.props.setPage("mypage")} style={{ color: "white" }}>���� ������</button></li>
                            <li><a href="" style={{ color: "white" }}>�˸�</a></li>
                            <li><a href="" style={{ color: "white" }}>ȯ�漳��</a></li>
                            <li><a href="" style={{ color: "white" }}>�α���</a></li>
                        </ui>
                    </nav>
                </div >
                <div className="search bar">
                    <nav class="searchbar">
                        <div class="searchbar_input">
                            <input class="inputbar"></input>
                            <button> �˻�</button>
                        </div>
                        <ui class="searchbar_char">
                            <text>�ؽ��±�:&nbsp;&nbsp;&nbsp;</text>
                            <select name="job">
                                <option value="">�Ҽ�</option>
                                <option value="�л�">��Ÿ��</option>
                                <option value="ȸ���" selected="selected">��ȭ</option>
                                <option value="��Ÿ">���</option>
                            </select>&nbsp;&nbsp;&nbsp;
                  
          <text>����:&nbsp;&nbsp;&nbsp;</text>
                            <select name="job">
                                <option value="">�ֽż�</option>
                                <option value="�л�">�α��</option>
                                <option value="ȸ���" selected="selected">������</option>
                                <option value="��Ÿ">�˻���</option>
                            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ui>
                    </nav>
                    </div>
                <div className="test text">
                    <p>This page is for works that are complete </p>
                </div>
            </section>

          )

    }
}


export default FinishedWork;
