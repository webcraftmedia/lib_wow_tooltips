<?php
namespace LIB;
class lib_wow_tooltips extends \LIB\lib_js{
    public static function get_class(){
        return self::class;}
    public static function js_path(){
        return new \PLIB('wow_tooltips/lib/wow_tooltips.js');}
    public static function version(){
        return 'alpha 1';}
}
