import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

/**
 * Represents a book.
 * @constructor
 * @param {object} childs - The title of the book.
 */
export default function TrbIrCameraTemplate(childs) {
  return () => {
    const $TrbIrCameraTemplate = (props) => {
      const {
        styles,
        startUrl = '',
      } = props;

      const navItems = [
        {
          name: 'Dashbaord',
          link: 'dashboard',
          active: true,
        },
        {
          name: 'Cameras',
          link: 'cameras',
          active: false,
        },
        {
          name: 'Alarms',
          link: 'alarms',
          active: false,
        },
        {
          name: 'Settings',
          link: 'settings',
          active: false,
        },
      ];

      return (
        <div id="container" className="container" style={styles.container}>
          <childs.navigation 
            items={navItems}
            startUrl={props.startUrl}
          />
          <Route path={`${startUrl}/`} exact component={childs.dashboard} />
          <Route 
            path={startUrl+'/dashboard'}
            component={childs.dashboard}
          />
          <Route 
            path={startUrl+'/cameras/:cameraId?/'}
            component={childs.cameras}
          />
          <Route 
            path={startUrl+'/alarms'}
            component={childs.alarms}
          />
          <Route 
            path={startUrl+'/settings'}
            render={() => (
              <childs.settings
                title="I am Title"
                setMaterialTheme={props.setMaterialTheme}
              />
            )}
          />
        </div>
      );
    };
    $TrbIrCameraTemplate.propTypes = {
      styles: PropTypes.object.isRequired,
      startUrl: PropTypes.string,
      setMaterialTheme: PropTypes.func.isRequired,
      
      // text: PropTypes.object.isRequired,
    };
    return $TrbIrCameraTemplate;
  };
}
