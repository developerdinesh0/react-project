import React, { Fragment } from 'react';
import Tab from './Tab';
import { MENU_STYLE, MENU_BACKGROUND } from '../../constants/SiteHeader';
import BreadCrumb from './BreadCrumb';

const TopMenu = (props) => {
	let header_info = JSON.parse(localStorage.getItem('header_info'));
	return (
    <Fragment>
      <div className="page-heading row">
        <div className="col-4">
          {props.page_heading ?
          <h4>{props.page_heading ? props.page_heading : null} </h4> : null}
        </div>
        <div className="col-8">
          <ul className="top_header_links nav top-tab-button">
            {props.tabs.map((tab) => (
              <Tab tab={tab} key={tab.id} />
            ))}
          </ul>
        </div>
      </div>
      {typeof props.bread_crumb !== "undefined" && props.bread_crumb.length ? (
        <div className="page-bread-crumb">
          {props.bread_crumb.map((bc) => (
            <BreadCrumb
              key={bc.id}
              link={bc.href}
              title={bc.title}
              is_active={bc.is_active}
            />
          ))}
        </div>
      ) : null}
    </Fragment>
  );
};
export default TopMenu;
