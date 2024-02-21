const { __ } = wp.i18n
const { SelectControl  } = wp.components

const Aspectratio = ( { attributes, setAttributes } ) => {
    const { 
        aspectratio_xs, 
        aspectratio_sm, 
        aspectratio_md, 
        aspectratio_lg,
        aspectratio_xl
    } = attributes
        
    return (
        <div>
            <SelectControl
                label={ __( 'Aspectratio XS', 'egov' ) }
                value={ aspectratio_xs }
                options={ [
                    { 
                        label: __( 'Aspectratio 4:1', 'egov' ), 
                        value: 'aspectratio-4-1' 
                    },
                    { 
                        label: __( 'Aspectratio 21:9', 'egov' ), 
                        value: 'aspectratio-21-9' 
                    },
                    { 
                        label: __( 'Aspectratio 16:9', 'egov' ), 
                        value: 'aspectratio-16-9' 
                    },
                    { 
                        label: __( 'Aspectratio 4:3', 'egov' ), 
                        value: 'aspectratio-4-3' },
                    { 
                        label: __( 'Aspectratio 1:1', 'egov' ), 
                        value: 'aspectratio-1-1' 
                    },
                    { 
                        label: __( 'Aspectratio 2:3', 'egov' ), 
                        value: 'aspectratio-2-3' 
                    },
                    { 
                        label: __( 'Aspectratio 3:4', 'egov' ), 
                        value: 'aspectratio-3-4' 
                    },
                    { 
                        label: __( 'Aspectratio 8:1', 'egov' ), 
                        value: 'aspectratio-8-1' 
                    }
                ] }
                onChange={ ( col ) => { setAttributes( { aspectratio_xs: col } ) } }
            />
            <SelectControl
                label={ __( 'Aspectratio SM', 'egov' ) }
                value={ aspectratio_sm }
                options={ [
                    { 
                        label: __( 'Bypass', 'egov' ), 
                        value: null
                    },
                    { 
                        label: __( 'Aspectratio 4:1', 'egov' ), 
                        value: 'aspectratio-sm-4-1' 
                    },
                    { 
                        label: __( 'Aspectratio 21:9', 'egov' ), 
                        value: 'aspectratio-sm-21-9' 
                    },
                    { 
                        label: __( 'Aspectratio 16:9', 'egov' ), 
                        value: 'aspectratio-sm-16-9' 
                    },
                    { 
                        label: __( 'Aspectratio 4:3', 'egov' ), 
                        value: 'aspectratio-sm-4-3' },
                    { 
                        label: __( 'Aspectratio 1:1', 'egov' ), 
                        value: 'aspectratio-sm-1-1' 
                    },
                    { 
                        label: __( 'Aspectratio 2:3', 'egov' ), 
                        value: 'aspectratio-sm-2-3' 
                    },
                    { 
                        label: __( 'Aspectratio 3:4', 'egov' ), 
                        value: 'aspectratio-sm-3-4' 
                    },
                    { 
                        label: __( 'Aspectratio 8:1', 'egov' ), 
                        value: 'aspectratio-sm-8-1' 
                    }
                ] }
                onChange={ ( col ) => { setAttributes( { aspectratio_sm: col } ) } }
            />
            <SelectControl
                label={ __( 'Aspectratio MD', 'egov' ) }
                value={ aspectratio_md }
                options={ [
                    { 
                        label: __( 'Bypass', 'egov' ), 
                        value: null
                    },
                    { 
                        label: __( 'Aspectratio 4:1', 'egov' ), 
                        value: 'aspectratio-md-4-1' 
                    },
                    { 
                        label: __( 'Aspectratio 21:9', 'egov' ), 
                        value: 'aspectratio-md-21-9' 
                    },
                    { 
                        label: __( 'Aspectratio 16:9', 'egov' ), 
                        value: 'aspectratio-md-16-9' 
                    },
                    { 
                        label: __( 'Aspectratio 4:3', 'egov' ), 
                        value: 'aspectratio-md-4-3' },
                    { 
                        label: __( 'Aspectratio 1:1', 'egov' ), 
                        value: 'aspectratio-md-1-1' 
                    },
                    { 
                        label: __( 'Aspectratio 2:3', 'egov' ), 
                        value: 'aspectratio-md-2-3' 
                    },
                    { 
                        label: __( 'Aspectratio 3:4', 'egov' ), 
                        value: 'aspectratio-md-3-4' 
                    },
                    { 
                        label: __( 'Aspectratio 8:1', 'egov' ), 
                        value: 'aspectratio-md-8-1' 
                    }
                ] }
                onChange={ ( col ) => { setAttributes( { aspectratio_md: col } ) } }
            />
            <SelectControl
                label={ __( 'Aspectratio LG', 'egov' ) }
                value={ aspectratio_lg }
                options={ [
                    { 
                        label: __( 'Bypass', 'egov' ), 
                        value: null
                    },
                    { 
                        label: __( 'Aspectratio 4:1', 'egov' ), 
                        value: 'aspectratio-lg-4-1' 
                    },
                    { 
                        label: __( 'Aspectratio 21:9', 'egov' ), 
                        value: 'aspectratio-lg-21-9' 
                    },
                    { 
                        label: __( 'Aspectratio 16:9', 'egov' ), 
                        value: 'aspectratio-lg-16-9' 
                    },
                    { 
                        label: __( 'Aspectratio 4:3', 'egov' ), 
                        value: 'aspectratio-lg-4-3' },
                    { 
                        label: __( 'Aspectratio 1:1', 'egov' ), 
                        value: 'aspectratio-lg-1-1' 
                    },
                    { 
                        label: __( 'Aspectratio 2:3', 'egov' ), 
                        value: 'aspectratio-lg-2-3' 
                    },
                    { 
                        label: __( 'Aspectratio 3:4', 'egov' ), 
                        value: 'aspectratio-lg-3-4' 
                    },
                    { 
                        label: __( 'Aspectratio 8:1', 'egov' ), 
                        value: 'aspectratio-lg-8-1' 
                    }
                ] }
                onChange={ ( col ) => { setAttributes( { aspectratio_lg: col } ) } }
            />
            <SelectControl
                label={ __( 'Aspectratio XL', 'egov' ) }
                value={ aspectratio_xl }
                options={ [
                    { 
                        label: __( 'Bypass', 'egov' ), 
                        value: null
                    },
                    { 
                        label: __( 'Aspectratio 4:1', 'egov' ), 
                        value: 'aspectratio-xl-4-1' 
                    },
                    { 
                        label: __( 'Aspectratio 21:9', 'egov' ), 
                        value: 'aspectratio-xl-21-9' 
                    },
                    { 
                        label: __( 'Aspectratio 16:9', 'egov' ), 
                        value: 'aspectratio-xl-16-9' 
                    },
                    { 
                        label: __( 'Aspectratio 4:3', 'egov' ), 
                        value: 'aspectratio-xl-4-3' },
                    { 
                        label: __( 'Aspectratio 1:1', 'egov' ), 
                        value: 'aspectratio-xl-1-1' 
                    },
                    { 
                        label: __( 'Aspectratio 2:3', 'egov' ), 
                        value: 'aspectratio-xl-2-3' 
                    },
                    { 
                        label: __( 'Aspectratio 3:4', 'egov' ), 
                        value: 'aspectratio-xl-3-4' 
                    },
                    { 
                        label: __( 'Aspectratio 8:1', 'egov' ), 
                        value: 'aspectratio-xl-8-1' 
                    }
                ] }
                onChange={ ( col ) => { setAttributes( { aspectratio_xl: col } ) } }
            />
        </div>
    )
}

export default Aspectratio;