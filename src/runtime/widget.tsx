/**
 * ========================================================================
 * Jugrafiya GeoTemplate - Widget Runtime Logic
 *
 * Author: Jugrafiya (https://jugrafiya.com)
 * Developed By: Aneeqa Abrar
 * All rights reserved.
 *
 * Description: Main entry point for the widget's runtime behavior.
 * Notes: This file contains React components and hooks for rendering the UI.
 * ========================================================================
 */

// import jimu packages
import { React, type AllWidgetProps } from "jimu-core";
import { JimuMapViewComponent, type JimuMapView } from "jimu-arcgis";

// import ESRI geometry packages
import Point from "@arcgis/core/geometry/Point";
import Polyline from "@arcgis/core/geometry/Polyline";
import Polygon from "@arcgis/core/geometry/Polygon.js";
import Graphic from "@arcgis/core/Graphic";

// import global context
import ContextProvider from "../context/ContextProvider";

// import components
import CustomButton from "../components/CustomButton";

// import other packages (if any)

// import calcite components
import { CalciteButton } from "calcite-components";

// import styles
import "../style/widget.scss";

// import react hooks
const { useState, useEffect, useRef } = React;

const widgetName = (props: AllWidgetProps<any>) => {
  // Define states

  const functionName = (jmv: JimuMapView) => {
    // Add logic to interact with map (click example):

    jmv.view.on("click", (evt) => {
      // Add logic for click event

      // add a graphic point/line or polygon
      const point: Point = jmv.view.toMap({
        x: evt.x,
        y: evt.y,
      });

      // Point assigned a style
      const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [165, 105, 189],
        size: 6,
      };

      // Creating point as graphic
      const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
      });

      // Add point layer
      jmv.view.graphics.add(pointGraphic);
    });
  };

  return (
    <div className="widget-starter jimu-widget">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds?.[0]}
          onActiveViewChange={functionName} // this allows interaction with the map
        />
      )}
      <div>
        <p>
          <b>This is your widget!</b>
        </p>
        <p>
          <b>Add your UI content here</b>
        </p>
      </div>
    </div>
  );
};

export default widgetName;
