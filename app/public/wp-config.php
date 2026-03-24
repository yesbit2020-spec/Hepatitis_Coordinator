<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '5a#ZO-[]^c%8o:%u=#sUZyN>O}soi%W!yF+f#T?_=P*jfJ3TTqaH=uUw*T.W.v9n' );
define( 'SECURE_AUTH_KEY',   'SHt6<#V:xdH#F&2}:B9a|@]?t7=]{nr&nDm=E`idi.C^:aO @E`6U,>bRMgtRlxD' );
define( 'LOGGED_IN_KEY',     '`mUAh:D~~8 .<<vz$J;|lWq1)oYJCQ-wsTU[E%J5|>M6dwl(YgWe<(C {}:{,4<e' );
define( 'NONCE_KEY',         'ph6<YLqiogD4v_QR:k=+5y+F]-4_XDgKu84?0R4aEETq&EZ83p5Cnw!yTlk,y)d%' );
define( 'AUTH_SALT',         'AW&^7tv3t^4E%|?I@}SM6xpLX^sKHp%DBrz2hx|g]@B;_&wS$EN:!P?bu)LmqaVY' );
define( 'SECURE_AUTH_SALT',  'CR,(p5c^|J8DOlCq0VrR$};cL#E81ISDK(ogd:v!>Ib69EFZuA${7xM2 9WlmFNm' );
define( 'LOGGED_IN_SALT',    ';FB;H-09EGPnG !TdERR`p#J^cV#SxHkJO<|D`KdOMeXe~4+^!HbB~^]o#MrMZ^j' );
define( 'NONCE_SALT',        '8y%,/<:jeeE&|y-DS;3k )PV7D&VdUy-QXO]$f[ck)15N1}g69x.G=>[0!azbuq8' );
define( 'WP_CACHE_KEY_SALT', 'V5vI0(NBHyGs|=_xA1w($o&3rGFh]:LFHp(y9n_hG@=;i%-:=nA[mT2d],T?R$zt' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
