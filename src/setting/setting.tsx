/**
 * ========================================================================
 * Jugrafiya GeoTemplate - Settings Panel
 *
 * Author: Jugrafiya (https://jugrafiya.com)
 * Developed By: Aneeqa Abrar
 * All rights reserved.
 *
 * Description: Implements the settings interface for configuring the widget.
 * Notes: Ensure that changes in this file reflect in the widget's runtime.
 * ========================================================================
 */

// import jimu packages
import { React } from "jimu-core";
import { type AllWidgetSettingProps } from "jimu-for-builder";
import { MapWidgetSelector } from "jimu-ui/advanced/setting-components";

// import styles
import "../style/setting.scss";

const Setting = (props: AllWidgetSettingProps<any>) => {
  // This function connect the map with the widget
  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds,
    });
  };

  return (
    <div className="widget-setting">
      <div className="setting-row">
        <label htmlFor="widget-title">Select Map:</label>
        <MapWidgetSelector
          useMapWidgetIds={props.useMapWidgetIds}
          onSelect={onMapWidgetSelected}
        />
      </div>
    </div>
  );
};

export default Setting;
