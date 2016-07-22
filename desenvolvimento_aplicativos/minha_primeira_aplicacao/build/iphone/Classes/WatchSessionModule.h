/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2016 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#if IS_XCODE_7
#import "TiModule.h"
#import <WatchConnectivity/watchConnectivity.h>

@interface WatchSessionModule : TiModule<WCSessionDelegate> {
@private
    WCSession *watchSession;
}

@end
#endif