/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we\'ve switched to the design first approach! You can now help us improve the API whether it\'s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 *
 * The version of the OpenAPI document: 1.0.17
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    phone?: string;
    /**
     * User Status
     * @type {number}
     * @memberof User
     */
    userStatus?: number;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'userStatus': !exists(json, 'userStatus') ? undefined : json['userStatus'],
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'username': value.username,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
        'password': value.password,
        'phone': value.phone,
        'userStatus': value.userStatus,
    };
}
