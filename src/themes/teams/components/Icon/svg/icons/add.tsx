import * as React from 'react'
import { TeamsSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg viewBox="0 0 32 32" role="presentation" focusable="false" className={classes.svg}>
      <path
        className={classes.outlinePart}
        d="M23.3516,16.1172C23.4502,16.2168,23.5,16.334,23.5,16.4688c0,0.1357-0.0498,0.2529-0.1484,0.3516
              C23.252,16.9199,23.1348,16.9688,23,16.9688h-6v6c0,0.1357-0.0498,0.2529-0.1484,0.3516c-0.0996,0.0996-0.2168,0.1484-0.3516,0.1484
              c-0.1357,0-0.2529-0.0488-0.3516-0.1484C16.0488,23.2217,16,23.1045,16,22.9688v-6h-6c-0.1357,0-0.2529-0.0488-0.3516-0.1484
              C9.5493,16.7217,9.5,16.6045,9.5,16.4688c0-0.1348,0.0493-0.252,0.1484-0.3516C9.7471,16.0186,9.8643,15.9688,10,15.9688h6v-6
              c0-0.1353,0.0488-0.2524,0.1484-0.3516c0.0986-0.0986,0.2158-0.1484,0.3516-0.1484c0.1348,0,0.252,0.0498,0.3516,0.1484
              C16.9502,9.7163,17,9.8335,17,9.9688v6h6C23.1348,15.9688,23.252,16.0186,23.3516,16.1172z"
      />
      <path
        className={classes.filledPart}
        d="M23.5,15.9688c0,0.1357-0.0264,0.2646-0.0781,0.3867c-0.0527,0.123-0.124,0.2295-0.2148,0.3203
	           c-0.0918,0.0918-0.1982,0.1631-0.3203,0.2148c-0.123,0.0527-0.252,0.0781-0.3867,0.0781H17v5.5
	           c0,0.1357-0.0264,0.2646-0.0781,0.3867c-0.0527,0.123-0.124,0.2295-0.2148,0.3203c-0.0918,0.0918-0.1982,0.1631-0.3203,0.2148
	           c-0.123,0.0527-0.252,0.0781-0.3867,0.0781c-0.1357,0-0.2646-0.0254-0.3867-0.0781c-0.1226-0.0518-0.2295-0.123-0.3203-0.2148
	           c-0.0913-0.0908-0.1631-0.1973-0.2148-0.3203C15.0259,22.7334,15,22.6045,15,22.4688v-5.5H9.5
	           c-0.1357,0-0.2646-0.0254-0.3867-0.0781c-0.1226-0.0518-0.2295-0.123-0.3203-0.2148c-0.0913-0.0908-0.1631-0.1973-0.2148-0.3203
	           C8.5259,16.2334,8.5,16.1045,8.5,15.9688c0-0.1353,0.0259-0.2642,0.0781-0.3867c0.0518-0.1221,0.1235-0.229,0.2148-0.3203
	           c0.0908-0.0908,0.1978-0.1626,0.3203-0.2148c0.1221-0.0518,0.251-0.0781,0.3867-0.0781H15v-5.5
	           c0-0.1353,0.0259-0.2642,0.0781-0.3867c0.0518-0.1221,0.1235-0.229,0.2148-0.3203c0.0908-0.0908,0.1978-0.1626,0.3203-0.2148
	           C15.7354,8.4951,15.8643,8.4688,16,8.4688c0.1348,0,0.2637,0.0264,0.3867,0.0781c0.1221,0.0522,0.2285,0.124,0.3203,0.2148
	           C16.7979,8.853,16.8691,8.96,16.9219,9.082C16.9736,9.2046,17,9.3335,17,9.4688v5.5h5.5c0.1348,0,0.2637,0.0264,0.3867,0.0781
	           c0.1221,0.0522,0.2285,0.124,0.3203,0.2148c0.0908,0.0913,0.1621,0.1982,0.2148,0.3203C23.4736,15.7046,23.5,15.8335,23.5,15.9688z"
      />
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec