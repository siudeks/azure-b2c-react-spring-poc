/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for
 * license information.
 */
package com.test.azure.ad.nonreactive.azureadtest;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @CrossOrigin
    @RequestMapping("/home")
    public String home() {
        return "No need for authorization";
    }

    /**
     * HTTP GET
     */
    @CrossOrigin
    @PreAuthorize("hasRole('ROLE_group1')")
    @RequestMapping(value = "/api/group1")
    public String getGroup1Item() {
        return "This content is for group 1";
    }

    @CrossOrigin
    @PreAuthorize("hasRole('ROLE_group1')")
    @RequestMapping(value = "/api/basic")
    public String getBasicItem() {
        return "This content is for basic group";
    }

}