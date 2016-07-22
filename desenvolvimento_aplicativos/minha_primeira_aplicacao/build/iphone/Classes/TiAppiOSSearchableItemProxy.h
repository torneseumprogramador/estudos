/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2016 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#if IS_XCODE_7
#ifdef USE_TI_APPIOSSEARCHABLEITEM
#import "TiProxy.h"
#import <CoreSpotlight/CoreSpotlight.h>

@interface TiAppiOSSearchableItemProxy : TiProxy {

}
-(id)initWithUniqueIdentifier:(NSString *)identifier
         withDomainIdentifier:(NSString*)domainIdentifier
             withAttributeSet:(CSSearchableItemAttributeSet *)attributeSet;

@property(nonatomic,retain) CSSearchableItem *item;

@end
#endif
#endif
