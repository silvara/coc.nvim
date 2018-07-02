/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export function escapeRegExp(text: string):string {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}
