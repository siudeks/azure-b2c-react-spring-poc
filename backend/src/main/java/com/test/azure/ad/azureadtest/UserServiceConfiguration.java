package com.test.azure.ad.azureadtest;

import com.microsoft.azure.spring.autoconfigure.aad.AADAuthenticationProperties;
import com.microsoft.azure.spring.autoconfigure.aad.ServiceEndpointsProperties;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.condition.ConditionalOnResource;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.userinfo.ReactiveOAuth2UserService;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;

@Configuration
@PropertySource("classpath:/aad-oauth2-common.properties")
@PropertySource(value = "classpath:serviceEndpoints.properties")
@EnableConfigurationProperties({AADAuthenticationProperties.class, ServiceEndpointsProperties.class})
public class UserServiceConfiguration {

   private final AADAuthenticationProperties aadAuthProps;

   private final ServiceEndpointsProperties serviceEndpointsProps;

   public UserServiceConfiguration(AADAuthenticationProperties aadAuthProperties,
                                     ServiceEndpointsProperties serviceEndpointsProps) {
       this.aadAuthProps = aadAuthProperties;
       this.serviceEndpointsProps = serviceEndpointsProps;
   }

//    @Bean
//    public ReactiveOAuth2UserService<OidcUserRequest, OidcUser> oidcUserService() {
//        return new ReactiveUserService(aadAuthProps, serviceEndpointsProps);
//    }
}