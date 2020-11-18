import React from 'react';

class PageHeader extends React.Component {

    render() {
        return (
            <div className="main header">
                <nav class="navbar">
                    <ui class="navbar_logo">
                        <li><button className="mypage-button" onClick={() => this.props.setPage("main")}>YuĮ�븮</button></li>
                    </ui>
                    <ui class="navbar_writing">
                        <li><button className="mypage-button" onClick={() => this.props.setPage("main")}>�Ҽ� �ۼ���</button></li>
                        <li><button className="mypage-button" onClick={() => this.props.setPage("main")}>�ϰ� ��ǰ��</button></li>
                    </ui>
                    <ui class="navbar_menu">
                        <li><button className="mypage-button" onClick={() => this.props.setPage("mypage")}>���� ������</button></li>
                        <li><button className="mypage-button" onClick={() => this.props.setPage("main")}>�˸�</button></li>
                        <li><button className="mypage-button" onClick={() => this.props.setPage("main")}>ȯ�漳��</button></li>
                        <li><button className="mypage-button" onClick={() => this.props.setPage("main")}>�α���</button></li>
                    </ui>
                </nav>
            </div>

        )
    }
}

export default PageHeader;
